import * as THREE from 'three';
import gsap from 'gsap';

export const DAILY_OUTFITS = [
  // 0: Sunday — Obsidian Stealth & Gold
  {
    day: "Sunday",
    name: "Obsidian Stealth",
    tagline: "Triple-black satin bomber with subtle gold accents & smoke kicks",
    badge: "🔥 SUNDAY DRIP",
    shirt: { color: "#16161a", roughness: 0.42, metalness: 0.18 },
    pant: { color: "#1c1c20", roughness: 0.78, metalness: 0.05 },
    shoe: { color: "#111114", roughness: 0.35, metalness: 0.15 },
    sole: { color: "#282830", roughness: 0.55, metalness: 0.0 }
  },
  // 1: Monday — Cyberpunk Neon Techwear
  {
    day: "Monday",
    name: "Neon Techwear",
    tagline: "Matte cyber-black tactical hoodie with vibrant violet soles",
    badge: "⚡ MONDAY DRIP",
    shirt: { color: "#1c1729", roughness: 0.5, metalness: 0.1 },
    pant: { color: "#14111c", roughness: 0.82, metalness: 0.04 },
    shoe: { color: "#2b1947", roughness: 0.36, metalness: 0.15 },
    sole: { color: "#c2a4ff", roughness: 0.22, metalness: 0.08 }
  },
  // 2: Tuesday — Tokyo Hypebeast Streetwear
  {
    day: "Tuesday",
    name: "Tokyo Hypebeast",
    tagline: "Oversized sand drop-shoulder hoodie & washed military cargos",
    badge: "👟 TUESDAY DRIP",
    shirt: { color: "#d2b794", roughness: 0.88, metalness: 0.0 },
    pant: { color: "#3a4233", roughness: 0.9, metalness: 0.0 },
    shoe: { color: "#483727", roughness: 0.55, metalness: 0.04 },
    sole: { color: "#f7f2e7", roughness: 0.58, metalness: 0.0 }
  },
  // 3: Wednesday — Minimalist Panda Luxe
  {
    day: "Wednesday",
    name: "Panda Luxe",
    tagline: "Monochrome charcoal oversized crewneck with clean white kicks",
    badge: "✨ WEDNESDAY DRIP",
    shirt: { color: "#2d2d33", roughness: 0.7, metalness: 0.04 },
    pant: { color: "#121214", roughness: 0.85, metalness: 0.0 },
    shoe: { color: "#f8f8fb", roughness: 0.3, metalness: 0.02 },
    sole: { color: "#18181c", roughness: 0.5, metalness: 0.0 }
  },
  // 4: Thursday — Signature Royal Velvet
  {
    day: "Thursday",
    name: "Signature Violet",
    tagline: "Deep royal purple velvet hoodie & dark slate streetwear joggers",
    badge: "👑 THURSDAY DRIP",
    shirt: { color: "#542a8c", roughness: 0.52, metalness: 0.12 },
    pant: { color: "#1b1827", roughness: 0.84, metalness: 0.03 },
    shoe: { color: "#7447c2", roughness: 0.38, metalness: 0.1 },
    sole: { color: "#eedeff", roughness: 0.35, metalness: 0.0 }
  },
  // 5: Friday — Forest Coder & Raw Denim
  {
    day: "Friday",
    name: "Matrix Utility",
    tagline: "Deep spruce green utility overshirt with dark graphite denim",
    badge: "🌲 FRIDAY DRIP",
    shirt: { color: "#18382a", roughness: 0.76, metalness: 0.06 },
    pant: { color: "#232927", roughness: 0.88, metalness: 0.0 },
    shoe: { color: "#204634", roughness: 0.44, metalness: 0.04 },
    sole: { color: "#ece6d8", roughness: 0.52, metalness: 0.0 }
  },
  // 6: Saturday — Sunset Retro Lo-Fi
  {
    day: "Saturday",
    name: "Sunset Lo-Fi",
    tagline: "Warm terracotta oversized hoodie with vintage blue denim & gum soles",
    badge: "🌅 SATURDAY DRIP",
    shirt: { color: "#b55333", roughness: 0.82, metalness: 0.0 },
    pant: { color: "#2f4257", roughness: 0.9, metalness: 0.0 },
    shoe: { color: "#8a3c22", roughness: 0.52, metalness: 0.03 },
    sole: { color: "#c68f4e", roughness: 0.58, metalness: 0.0 }
  }
];

export function getTodayOutfitIndex() {
  return new Date().getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
}

export function getTodayOutfit() {
  return DAILY_OUTFITS[getTodayOutfitIndex()];
}

export function applyOutfitToMaterials(outfit, materials, duration = 0.8) {
  if (!materials) return;
  const { shirt, pant, shoe, sole } = materials;

  if (shirt) {
    const target = new THREE.Color(outfit.shirt.color);
    gsap.to(shirt.color, {
      r: target.r,
      g: target.g,
      b: target.b,
      duration,
      ease: "power2.out"
    });
    gsap.to(shirt, {
      roughness: outfit.shirt.roughness,
      metalness: outfit.shirt.metalness,
      duration
    });
  }

  if (pant) {
    const target = new THREE.Color(outfit.pant.color);
    gsap.to(pant.color, {
      r: target.r,
      g: target.g,
      b: target.b,
      duration,
      ease: "power2.out"
    });
    gsap.to(pant, {
      roughness: outfit.pant.roughness,
      metalness: outfit.pant.metalness,
      duration
    });
  }

  if (shoe) {
    const target = new THREE.Color(outfit.shoe.color);
    gsap.to(shoe.color, {
      r: target.r,
      g: target.g,
      b: target.b,
      duration,
      ease: "power2.out"
    });
    gsap.to(shoe, {
      roughness: outfit.shoe.roughness,
      metalness: outfit.shoe.metalness,
      duration
    });
  }

  if (sole) {
    const target = new THREE.Color(outfit.sole.color);
    gsap.to(sole.color, {
      r: target.r,
      g: target.g,
      b: target.b,
      duration,
      ease: "power2.out"
    });
    gsap.to(sole, {
      roughness: outfit.sole.roughness,
      metalness: outfit.sole.metalness,
      duration
    });
  }
}
