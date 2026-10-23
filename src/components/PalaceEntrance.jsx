import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function PalaceEntrance() {
  const containerRef = useRef(null);
  const mountRef = useRef(null);

  // 130vh: fast, instantaneous response, zero latency
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // UI Overlays & Prompts
  const promptOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const shockwaveScale = useTransform(scrollYProgress, [0.55, 0.95], [0.2, 5.5]);
  const shockwaveOpacity = useTransform(scrollYProgress, [0.55, 0.72, 0.98], [0, 0.8, 0]);

  // Scene stays visible right until the exact hand-off
  const sceneOpacity = useTransform(scrollYProgress, [0.94, 1.0], [1, 0]);
  const pointerEvents = useTransform(scrollYProgress, (v) => v > 0.9 ? "none" : "auto");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ==========================================
    // THREE.JS SCENE SETUP
    // ==========================================
    const scene = new THREE.Scene();

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const aspect = width / height;
    const camera = new THREE.PerspectiveCamera(aspect > 2.1 ? 38 : 46, aspect, 0.1, 600);
    camera.position.set(0, 1.5, 38);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.innerWidth >= 1920,
      powerPreference: "high-performance",
      precision: "mediump"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    mount.appendChild(renderer.domElement);

    // Warm stone ink materials
    const stoneColor = 0x57534E;
    const goldColor = 0x9C8B72;
    const darkStoneColor = 0x292524;

    const wireframeMat = new THREE.MeshBasicMaterial({
      color: stoneColor,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });

    const holoGateMat = new THREE.MeshBasicMaterial({
      color: goldColor,
      wireframe: true,
      transparent: true,
      opacity: 0.82
    });

    const solidTrimMat = new THREE.MeshBasicMaterial({
      color: darkStoneColor,
      transparent: true,
      opacity: 0.65
    });

    const glowParticleMat = new THREE.PointsMaterial({
      color: goldColor,
      size: 0.22,
      transparent: true,
      opacity: 0.8
    });

    const speedLineMat = new THREE.LineBasicMaterial({
      color: stoneColor,
      transparent: true,
      opacity: 0.55
    });

    // ------------------------------------------
    // FULL 3D HOLOGRAPHIC CASTLE (Shifted down for full view)
    // ------------------------------------------
    const castleGroup = new THREE.Group();
    castleGroup.position.set(0, -2.8, 0);
    scene.add(castleGroup);

    // 1. Foundation Steps
    for (let i = 0; i < 3; i++) {
      const step = new THREE.Mesh(
        new THREE.BoxGeometry(36 + i * 2.5, 0.4, 16 + i * 2),
        wireframeMat
      );
      step.position.y = -0.2 - i * 0.4;
      castleGroup.add(step);
    }

    // 2. Central Gatehouse Portal
    const gatehouseWall = new THREE.Mesh(new THREE.BoxGeometry(10.5, 12, 3), wireframeMat);
    gatehouseWall.position.set(0, 5.8, -1.5);
    castleGroup.add(gatehouseWall);

    const gatehouseArch = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.25, 6, 20, Math.PI), solidTrimMat);
    gatehouseArch.position.set(0, 5.8, 0.1);
    castleGroup.add(gatehouseArch);

    for (let c = -4.5; c <= 4.5; c += 1.8) {
      const crenel = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), solidTrimMat);
      crenel.position.set(c, 12.3, -1.5);
      castleGroup.add(crenel);
    }

    // 3. Two Main Inner Bastion Towers
    const towerPositions = [-7.8, 7.8];
    towerPositions.forEach((tx) => {
      const tower = new THREE.Mesh(new THREE.CylinderGeometry(2, 2.4, 15, 10), wireframeMat);
      tower.position.set(tx, 7.5, 0);
      castleGroup.add(tower);

      const bRing = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 1.2, 10), solidTrimMat);
      bRing.position.set(tx, 15.2, 0);
      castleGroup.add(bRing);

      const spire = new THREE.Mesh(new THREE.ConeGeometry(2.4, 5.5, 10), wireframeMat);
      spire.position.set(tx, 18.2, 0);
      castleGroup.add(spire);

      const finial = new THREE.Mesh(new THREE.SphereGeometry(0.35, 6, 6), solidTrimMat);
      finial.position.set(tx, 21.2, 0);
      castleGroup.add(finial);
    });

    // 4. Two Outer Watchtowers & Curtain Walls
    const outerPositions = [-15.5, 15.5];
    outerPositions.forEach((ox) => {
      const oTower = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.9, 12, 10), wireframeMat);
      oTower.position.set(ox, 5.8, -2);
      castleGroup.add(oTower);

      const oSpire = new THREE.Mesh(new THREE.ConeGeometry(1.9, 4.5, 10), wireframeMat);
      oSpire.position.set(ox, 13.8, -2);
      castleGroup.add(oSpire);

      const wallX = ox > 0 ? 11.5 : -11.5;
      const wall = new THREE.Mesh(new THREE.BoxGeometry(6.5, 8, 1.8), wireframeMat);
      wall.position.set(wallX, 4, -1.8);
      castleGroup.add(wall);
    });

    // ------------------------------------------
    // 5. 3D DOUBLE PALACE GATES
    // ------------------------------------------
    const gateWidth = 3.5;
    const gateHeight = 9.5;

    // LEFT GATE (Hinged at x = -3.5)
    const leftGatePivot = new THREE.Group();
    leftGatePivot.position.set(-gateWidth, 4.8, 0.1);
    castleGroup.add(leftGatePivot);

    const leftGateBody = new THREE.Group();
    leftGateBody.position.set(gateWidth / 2, 0, 0);
    leftGatePivot.add(leftGateBody);

    const leftFrame = new THREE.Mesh(new THREE.BoxGeometry(gateWidth, gateHeight, 0.2), holoGateMat);
    leftGateBody.add(leftFrame);

    for (let b = -gateWidth / 2 + 0.4; b < gateWidth / 2; b += 0.5) {
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, gateHeight - 0.4, 6), solidTrimMat);
      bar.position.x = b;
      leftGateBody.add(bar);
    }

    const ringGeo = new THREE.TorusGeometry(0.85, 0.06, 6, 16);
    const leftRing1 = new THREE.Mesh(ringGeo, holoGateMat);
    leftRing1.position.set(0, 1.5, 0.15);
    leftGateBody.add(leftRing1);

    const leftRing2 = new THREE.Mesh(ringGeo, holoGateMat);
    leftRing2.position.set(0, -1.8, 0.15);
    leftGateBody.add(leftRing2);

    // RIGHT GATE (Hinged at x = 3.5)
    const rightGatePivot = new THREE.Group();
    rightGatePivot.position.set(gateWidth, 4.8, 0.1);
    castleGroup.add(rightGatePivot);

    const rightGateBody = new THREE.Group();
    rightGateBody.position.set(-gateWidth / 2, 0, 0);
    rightGatePivot.add(rightGateBody);

    const rightFrame = new THREE.Mesh(new THREE.BoxGeometry(gateWidth, gateHeight, 0.2), holoGateMat);
    rightGateBody.add(rightFrame);

    for (let b = -gateWidth / 2 + 0.4; b < gateWidth / 2; b += 0.5) {
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, gateHeight - 0.4, 6), solidTrimMat);
      bar.position.x = b;
      rightGateBody.add(bar);
    }

    const rightRing1 = new THREE.Mesh(ringGeo, holoGateMat);
    rightRing1.position.set(0, 1.5, 0.15);
    rightGateBody.add(rightRing1);

    const rightRing2 = new THREE.Mesh(ringGeo, holoGateMat);
    rightRing2.position.set(0, -1.8, 0.15);
    rightGateBody.add(rightRing2);

    // Central Mandala Seal
    const sealGroup = new THREE.Group();
    sealGroup.position.set(0, 4.8, 0.4);
    castleGroup.add(sealGroup);
    sealGroup.add(new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.08, 8, 20), solidTrimMat));
    sealGroup.add(new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.05, 8, 16), holoGateMat));

    // ------------------------------------------
    // 6. SPEED TUNNEL LINES
    // ------------------------------------------
    const speedLinesGroup = new THREE.Group();
    scene.add(speedLinesGroup);

    for (let i = 0; i < 28; i++) {
      const radius = 3 + Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const points = [
        new THREE.Vector3(x, y, -20 - Math.random() * 20),
        new THREE.Vector3(x, y, 10 + Math.random() * 15)
      ];
      speedLinesGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), speedLineMat));
    }
    speedLinesGroup.visible = false;

    // Ambient floating particles
    const particleCount = 150;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 36;
      particlePositions[i + 1] = (Math.random() - 0.5) * 26;
      particlePositions[i + 2] = (Math.random() - 0.5) * 36;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMesh = new THREE.Points(particleGeo, glowParticleMat);
    scene.add(particleMesh);

    // Mouse tilt (smooth & throttled)
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.8;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 1.8;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      const currentAspect = width / height;
      camera.aspect = currentAspect;
      camera.fov = currentAspect > 2.1 ? 38 : 46;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };
    window.addEventListener('resize', handleResize);

    // Intersection Observer to completely halt WebGL rendering off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);

    // ==========================================
    // ZERO-LATENCY ANIMATION & DIRECT SCROLL BINDING
    // ==========================================
    let animationFrameId;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisible) return;

      // Direct, instantaneous scroll value with zero double-smoothing
      const p = scrollYProgress.get();

      if (p >= 0.99) return;

      // PHASE 1: Approach & Gate Opening (p: 0 -> 0.52)
      if (p <= 0.52) {
        speedLinesGroup.visible = false;
        const approachT = p / 0.52;

        // Direct responsive camera mapping
        camera.position.z = 38 - approachT * 27;
        camera.position.y = 1.5;
        camera.rotation.x = 0;

        const gateOpenT = Math.max((approachT - 0.22) / 0.78, 0);
        const gateAngle = gateOpenT * (Math.PI * 0.68);
        leftGatePivot.rotation.y = -gateAngle;
        rightGatePivot.rotation.y = gateAngle;

        sealGroup.rotation.z = p * 4;
        sealGroup.scale.setScalar(Math.max(1 - p * 3.5, 0.001));
      }
      // PHASE 2: HYPER DROP DIVE (p: 0.52 -> 1.0)
      else {
        speedLinesGroup.visible = true;
        const dropT = (p - 0.52) / 0.48;

        leftGatePivot.rotation.y = -Math.PI * 0.68;
        rightGatePivot.rotation.y = Math.PI * 0.68;
        sealGroup.scale.setScalar(0.001);

        // HYPER DROP: Camera dives down and forward through the portal
        camera.position.z = 11 - dropT * 24;
        camera.position.y = 1.5 - dropT * 11;
        camera.rotation.x = -dropT * 0.5; // -28 degree downward dive angle

        speedLinesGroup.children.forEach((l) => {
          l.position.z += 1.2;
          if (l.position.z > 22) l.position.z = -30;
        });
      }

      // Subtle mouse tilt
      const mouseDamp = Math.max(1 - p * 1.5, 0.1);
      camera.position.x = mouseX * 2.2 * mouseDamp;

      particleMesh.rotation.y += 0.0006;

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleSkip = () => {
    if (!containerRef.current) return;
    const end = containerRef.current.offsetTop + containerRef.current.offsetHeight;
    window.scrollTo({ top: end, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[130vh] w-full bg-[#FAFAF8]"
    >
      {/* Pinned 3D Stage with Zero Glitch */}
      <motion.div
        style={{
          opacity: sceneOpacity,
          pointerEvents,
        }}
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none bg-[#FAFAF8]"
      >
        {/* Skip Action Pill */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-widest uppercase bg-white/90 border border-[#292524]/15 hover:border-[#1C1917] hover:bg-white text-[#1C1917] shadow-[0_2px_12px_rgba(41,37,36,0.06)] transition-all cursor-pointer flex items-center gap-2"
        >
          <span>SKIP TO PORTFOLIO</span>
          <span>↓</span>
        </button>

        {/* Real-Time Full 3D Holographic Castle Canvas */}
        <div
          ref={mountRef}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        />

        {/* Shockwave Blast Ring Effect (Fires during the Crazy Drop) */}
        <motion.div
          style={{
            scale: shockwaveScale,
            opacity: shockwaveOpacity,
          }}
          className="absolute z-20 w-80 h-80 rounded-full border-[3px] border-[#1C1917]/35 bg-radial from-transparent via-[#A8A29E]/15 to-transparent pointer-events-none"
        />

        {/* Clean, Subtle Scroll Prompt */}
        <motion.div
          style={{ opacity: promptOpacity }}
          className="absolute bottom-8 z-30 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#1C1917] font-bold bg-white/90 px-4 py-1.5 rounded-full border border-[#292524]/15 shadow-sm">
            SCROLL TO ENTER CITADEL
          </span>
          <ArrowDown size={15} className="text-[#1C1917] animate-bounce mt-1" />
        </motion.div>

      </motion.div>
    </div>
  );
}
