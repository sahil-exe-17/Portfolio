import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DAILY_OUTFITS, getTodayOutfitIndex } from '../utils/dailyDrip';

gsap.registerPlugin(ScrollTrigger);

const TYPING_BONES = [
  "thighL", "thighR", "shinL", "shinR", "forearmL", "forearmR", "handL", "handR",
  "f_pinky03R", "f_pinky02L", "f_pinky02R", "f_pinky01L", "f_pinky01R",
  "palm04L", "palm04R", "f_ring01L", "thumb01L", "thumb01R", "thumb03L", "thumb03R",
  "palm02L", "palm02R", "palm01L", "palm01R", "f_index01L", "f_index01R",
  "palm03L", "palm03R", "f_ring02L", "f_ring02R", "f_ring01R", "f_ring03L", "f_ring03R",
  "f_middle01L", "f_middle02L", "f_middle03L", "f_middle01R", "f_middle02R", "f_middle03R",
  "f_index02L", "f_index03L", "f_index02R", "f_index03R", "thumb02L", "f_pinky03L",
  "upper_armL", "upper_armR", "thumb02R", "toeL", "heel02L", "toeR", "heel02R"
];
const BROW_BONES = ["eyebrow_L", "eyebrow_R", "eyebrow.L", "eyebrow.R"];

function getFilteredAction(animations, mixer, clipName, boneNames) {
  const clip = THREE.AnimationClip.findByName(animations, clipName);
  if (!clip) return null;
  const filteredTracks = clip.tracks.filter((track) =>
    boneNames.some((bone) => track.name.toLowerCase().includes(bone.toLowerCase()))
  );
  if (!filteredTracks.length) return mixer.clipAction(clip);
  const filteredClip = new THREE.AnimationClip(clip.name + "_filtered", clip.duration, filteredTracks);
  return mixer.clipAction(filteredClip);
}

export default function Character3D() {
  const containerRef = useRef(null);
  const hoverRef = useRef(null);
  const materialsRef = useRef(null);
  const [outfitIndex] = useState(() => {
    const saved = localStorage.getItem('user_ootd_idx');
    return saved !== null ? parseInt(saved, 10) : getTodayOutfitIndex();
  });

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const aspect = width / height;

    const scene = new THREE.Scene();

    // Optimized Renderer
    const is4K = width > 2000 || height > 1200;
    const maxPixelRatio = is4K ? 1.0 : Math.min(window.devicePixelRatio, 1.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !is4K,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(maxPixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    // Exact Camera: FOV 14.5, position (0, 13.1, 24.7), zoom 1.1
    const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    // Initial ambient & directional lighting (Starts visible immediately!)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xc7aeff, 1.0);
    dirLight.position.set(-0.47, -0.32, -1);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xc2a4ff, 2.0, 100, 3);
    pointLight.position.set(3, 12, 4);
    scene.add(pointLight);

    // HDR Environment
    const rgbeLoader = new RGBELoader();
    rgbeLoader.setPath("/models/").load("char_enviorment.hdr", (hdrTexture) => {
      hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = hdrTexture;
      scene.environmentIntensity = 0.65;
      scene.environmentRotation.set(5.76, 85.85, 1);
    });

    let mixer = null;
    let spineNode = null;
    let screenMesh = null;
    let cleanupHover = null;
    let cleanupScroll = null;
    const clock = new THREE.Clock();

    // Load Character GLB (Original position & scale, 0 displacement)
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "/models/character.glb",
      (gltf) => {
        const model = gltf.scene;

        // Daily outfit based on current day of week (or user-chosen drip)
        const outfit = DAILY_OUTFITS[outfitIndex];

        // 1. Natural warm skin tone (South-Asian / Indian natural undertone)
        const skinMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#d59b73"),
          roughness: 0.58,
          metalness: 0.02
        });

        // 2. Styled dark hair & brows
        const hairMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#181417"),
          roughness: 0.72,
          metalness: 0.05
        });

        // 3. Space Grey matte metallic laptop chassis
        const laptopMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#25262a"),
          roughness: 0.28,
          metalness: 0.8
        });

        // 4. Keyboard keys (matte charcoal)
        const keysMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#151518"),
          roughness: 0.6,
          metalness: 0.1
        });

        // 5. Aesthetic daily clothing materials
        const shirtMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(outfit.shirt.color),
          roughness: outfit.shirt.roughness,
          metalness: outfit.shirt.metalness
        });

        const pantMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(outfit.pant.color),
          roughness: outfit.pant.roughness,
          metalness: outfit.pant.metalness
        });

        const shoeMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(outfit.shoe.color),
          roughness: outfit.shoe.roughness,
          metalness: outfit.shoe.metalness
        });

        const soleMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(outfit.sole.color),
          roughness: outfit.sole.roughness,
          metalness: outfit.sole.metalness
        });

        materialsRef.current = {
          shirt: shirtMaterial,
          pant: pantMaterial,
          shoe: shoeMaterial,
          sole: soleMaterial
        };

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;
            child.frustumCulled = true;

            const n = child.name;
            if (n === "BODY.SHIRT" || n.toLowerCase().includes("shirt")) {
              child.material = shirtMaterial;
            } else if (n === "Pant" || n.toLowerCase().includes("pant")) {
              child.material = pantMaterial;
            } else if (n === "Shoe" || (n.toLowerCase().includes("shoe") && !n.toLowerCase().includes("sole"))) {
              child.material = shoeMaterial;
            } else if (n === "Sole" || n.toLowerCase().includes("sole")) {
              child.material = soleMaterial;
            } else if (n === "Plane.007" || n === "Hand" || n === "Neck" || n === "Ear.001") {
              child.material = skinMaterial;
            } else if (n === "hair" || n === "Eyebrow") {
              child.material = hairMaterial;
            } else if (n === "Cube.002" || n === "Cube.007") {
              child.material = laptopMaterial;
            } else if (n.startsWith("KEYS") || n === "Keyboard") {
              child.material = keysMaterial;
            } else if (child.material && !Array.isArray(child.material)) {
              child.material.precision = "mediump";
            }
          }
        });

        // Exact foot alignment from original author
        const footR = model.getObjectByName("footR") || model.getObjectByName("foot.R");
        const footL = model.getObjectByName("footL") || model.getObjectByName("foot.L");
        if (footR) footR.position.y = 3.36;
        if (footL) footL.position.y = 3.36;

        scene.add(model);

        spineNode = model.getObjectByName("spine006") || model.getObjectByName("spine.006");
        screenMesh = model.getObjectByName("screenlight");

        // Character rim glow fade-in
        gsap.to(".character-rim", { y: "55%", opacity: 1, duration: 1.5, ease: "power2.out" });

        // Initialize animations & mixer
        mixer = new THREE.AnimationMixer(model);

        if (gltf.animations && gltf.animations.length) {
          // 1. Intro Animation
          const introClip = gltf.animations.find((a) => a.name === "introAnimation");
          if (introClip) {
            const introAction = mixer.clipAction(introClip);
            introAction.setLoop(THREE.LoopOnce, 1);
            introAction.clampWhenFinished = true;
            introAction.play();
          }

          // 2. Keystroke clicks on laptop
          ["key1", "key2", "key5", "key6"].forEach((keyName) => {
            const clip = THREE.AnimationClip.findByName(gltf.animations, keyName);
            if (clip) {
              const action = mixer.clipAction(clip);
              action.play();
              action.timeScale = 1.2;
            }
          });

          // 3. Hand & finger typing movement
          const typingAction = getFilteredAction(gltf.animations, mixer, "typing", TYPING_BONES);
          if (typingAction) {
            typingAction.enabled = true;
            typingAction.play();
            typingAction.timeScale = 1.2;
          }

          // 4. Eye blinking
          setTimeout(() => {
            const blinkClip = gltf.animations.find((a) => a.name === "Blink");
            if (blinkClip) {
              mixer.clipAction(blinkClip).play().fadeIn(0.5);
            }
          }, 2000);
        }

        // Eyebrow lift reaction on hover
        if (hoverRef.current) {
          const browAction = getFilteredAction(gltf.animations, mixer, "browup", BROW_BONES);
          let isHovered = false;
          if (browAction) {
            browAction.setLoop(THREE.LoopOnce, 1);
            browAction.clampWhenFinished = true;
            browAction.enabled = true;
          }
          const onEnter = () => {
            if (browAction && !isHovered) {
              isHovered = true;
              browAction.reset();
              browAction.enabled = true;
              browAction.setEffectiveWeight(4);
              browAction.fadeIn(0.4).play();
            }
          };
          const onLeave = () => {
            if (browAction && isHovered) {
              isHovered = false;
              browAction.fadeOut(0.5);
            }
          };
          const el = hoverRef.current;
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
          cleanupHover = () => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
          };
        }

        // Setup exact ScrollTrigger timelines
        cleanupScroll = setupScrollTrigger(model, camera);
      },
      undefined,
      (err) => console.error("Error loading character GLB:", err)
    );

    function setupScrollTrigger(model, cam) {
      let rand = 0;
      const randInterval = setInterval(() => {
        rand = Math.random();
      }, 200);

      const landingTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".landing-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      const aboutTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "center 55%",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      const whatTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".whatIDO",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      let screenLightMesh, planeMesh;
      model.traverse((child) => {
        if (child.name === "Plane004" || child.name === "Plane.004") {
          child.children?.forEach((c) => {
            if (c.material) {
              c.material.transparent = true;
              c.material.opacity = 0;
              if (c.material.name === "Material.027") {
                planeMesh = c;
                c.material.color.set("#FFFFFF");
              }
            }
          });
        }
        if (child.name === "screenlight") {
          screenLightMesh = child;
          if (child.material) {
            child.material.transparent = true;
            child.material.opacity = 0.85;
            child.material.emissive = new THREE.Color("#C8BFFF");
            gsap.timeline({ repeat: -1, repeatRefresh: true }).to(child.material, {
              emissiveIntensity: () => 8 * rand,
              duration: () => 0.6 * Math.random(),
              delay: () => 0.1 * Math.random()
            });
          }
        }
      });

      const spine005 = model.getObjectByName("spine005") || model.getObjectByName("spine.005");

      if (window.innerWidth > 1024) {
        landingTL
          .fromTo(model.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
          .to(cam.position, { z: 22 }, 0)
          .fromTo(".character-model", { x: 0 }, { x: "-25%", duration: 1 }, 0)
          .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
          .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
          .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

        aboutTL
          .to(cam.position, { z: 75, y: 8.4, duration: 6, delay: 2, ease: "power3.inOut" }, 0)
          .fromTo(".character-model", { pointerEvents: "inherit" }, { pointerEvents: "none", x: "-12%", delay: 2, duration: 5 }, 0)
          .to(model.rotation, { y: 0.92, x: 0.12, delay: 3, duration: 3 }, 0);

        if (spine005) {
          aboutTL.to(spine005.rotation, { x: 0.6, delay: 2, duration: 3 }, 0);
        }
        if (planeMesh && planeMesh.material) {
          aboutTL.to(planeMesh.material, { opacity: 1, duration: 0.8, delay: 3.2 }, 0);
          aboutTL.fromTo(planeMesh.position, { y: -10, z: 2 }, { y: 0, z: 0, delay: 1.5, duration: 3 }, 0);
        }
        if (screenLightMesh && screenLightMesh.material) {
          aboutTL.to(screenLightMesh.material, { opacity: 1, duration: 0.8, delay: 4.5 }, 0);
        }

        aboutTL.fromTo(".what-box-in", { display: "none" }, { display: "flex", duration: 0.1, delay: 6 }, 0);
        aboutTL.fromTo(".character-rim", { opacity: 1, scaleX: 1.4 }, { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 }, 0.3);

        whatTL
          .fromTo(".character-model", { y: "0%" }, { y: "-100%", duration: 4, ease: "none", delay: 1 }, 0)
          .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0)
          .to(model.rotation, { x: -0.04, duration: 2, delay: 1 }, 0);
      }

      return () => {
        clearInterval(randInterval);
        landingTL.kill();
        aboutTL.kill();
        whatTL.kill();
      };
    }

    // Head tracking on cursor (spine006)
    let mouseNorm = { x: 0, y: 0 };
    let smoothNorm = { x: 0.1, y: 0.2 };

    const onMouseMove = (e) => {
      mouseNorm.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNorm.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Smooth render loop (pause if tab hidden or scrolled past hero/about to save GPU & eliminate lag)
    let animId;
    const render = () => {
      animId = requestAnimationFrame(render);
      if (document.hidden) return;
      if (window.scrollY > 2000) return;

      if (spineNode) {
        if (window.scrollY < 200) {
          const r = Math.PI / 6;
          spineNode.rotation.y = THREE.MathUtils.lerp(spineNode.rotation.y, mouseNorm.x * r, smoothNorm.y);
          const s = -0.3;
          const c = 0.4;
          const targetX =
            mouseNorm.y > s
              ? mouseNorm.y < c
                ? -mouseNorm.y - 0.5 * r
                : -r - 0.5 * r
              : -s - 0.5 * r;
          spineNode.rotation.x = THREE.MathUtils.lerp(spineNode.rotation.x, targetX, smoothNorm.x);
        } else if (window.innerWidth > 1024) {
          spineNode.rotation.x = THREE.MathUtils.lerp(spineNode.rotation.x, -0.4, 0.03);
          spineNode.rotation.y = THREE.MathUtils.lerp(spineNode.rotation.y, -0.3, 0.03);
        }
      }

      if (screenMesh && screenMesh.material && screenMesh.material.opacity > 0.9) {
        pointLight.intensity = 20 * screenMesh.material.emissiveIntensity;
      }

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      renderer.render(scene, camera);
    };
    render();

    // Resize handler for responsive & 4K scaling
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (cleanupHover) cleanupHover();
      if (cleanupScroll) cleanupScroll();
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="character-container">
      <div className="character-model" ref={containerRef}>
        <div className="character-rim" />
        <div className="character-hover" ref={hoverRef} />
      </div>
    </div>
  );
}
