import gsap from 'gsap';
import { SplitText } from './splitText';

export function initialFX(lenisInstance) {
  document.body.style.overflowY = "auto";
  if (lenisInstance && lenisInstance.start) {
    lenisInstance.start();
  }
  const main = document.getElementsByTagName("main")[0];
  if (main) {
    main.classList.add("main-active");
  }
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 0.2
  });

  const targets = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"].flatMap((selector) =>
    Array.from(document.querySelectorAll(selector))
  );

  if (targets.length > 0) {
    const splitMain = new SplitText(targets, {
      type: "chars,lines",
      linesClass: "split-line"
    });

    gsap.fromTo(
      splitMain.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.2
      }
    );
  }

  const splitConfig = { type: "chars,lines", linesClass: "split-h2" };
  const l = new SplitText(".landing-h2-info", splitConfig);

  if (l.chars.length > 0) {
    gsap.fromTo(
      l.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3
      }
    );
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", y: 0, delay: 0.6 }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 }
  );

  const s = new SplitText(".landing-h2-info-1", splitConfig);
  const y = new SplitText(".landing-h2-1", splitConfig);
  const d = new SplitText(".landing-h2-2", splitConfig);

  if (l.chars.length > 0 && s.chars.length > 0) cycleTitles(l, s);
  if (y.chars.length > 0 && d.chars.length > 0) cycleTitles(y, d);
}

function cycleTitles(a, e) {
  gsap.timeline({ repeat: -1, repeatDelay: 1 })
    .fromTo(e.chars, { opacity: 0, y: 80 }, { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.08, delay: 4 }, 0)
    .fromTo(a.chars, { y: 80 }, { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.08, delay: 9 }, 1)
    .fromTo(a.chars, { y: 0 }, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.08, delay: 4 }, 0)
    .to(e.chars, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.08, delay: 9 }, 1);
}
