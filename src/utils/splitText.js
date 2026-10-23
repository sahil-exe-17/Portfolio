export class SplitText {
  constructor(target, options = {}) {
    this.chars = [];
    this.words = [];
    this.lines = [];
    this.elements = [];
    this.originalHTML = new Map();

    const type = options.type || "chars,words,lines";
    const linesClass = options.linesClass || "split-line";

    let elements = [];
    if (typeof target === "string") {
      elements = Array.from(document.querySelectorAll(target));
    } else if (target instanceof NodeList) {
      elements = Array.from(target);
    } else if (Array.isArray(target)) {
      elements = target;
    } else if (target) {
      elements = [target];
    }

    this.elements = elements.filter(Boolean);

    this.elements.forEach((el) => {
      this.originalHTML.set(el, el.innerHTML);

      if (type.includes("chars") && type.includes("words")) {
        this.splitWords(el);
        this.splitCharsFromWords(el);
      } else if (type.includes("chars")) {
        this.splitChars(el);
      } else if (type.includes("words")) {
        this.splitWords(el);
      }

      if (type.includes("lines")) {
        this.splitLines(el, linesClass);
      }
    });
  }

  splitChars(el) {
    const text = el.textContent || "";
    el.innerHTML = text
      .split("")
      .map((t) =>
        t === " "
          ? '<span class="split-char" style="display:inline-block">&nbsp;</span>'
          : t === "\n"
          ? "<br>"
          : `<span class="split-char" style="display:inline-block">${t}</span>`
      )
      .join("");
    this.chars.push(...Array.from(el.querySelectorAll(".split-char")));
  }

  splitWords(el) {
    const words = (el.textContent || "").split(/(\s+)/);
    el.innerHTML = words
      .map((t) =>
        t.trim().length === 0
          ? t
          : `<span class="split-word" style="display:inline-block">${t}</span>`
      )
      .join("");
    this.words.push(...Array.from(el.querySelectorAll(".split-word")));
  }

  splitCharsFromWords(el) {
    el.querySelectorAll(".split-word").forEach((word) => {
      const chars = (word.textContent || "").split("");
      word.innerHTML = chars
        .map((t) => `<span class="split-char" style="display:inline-block">${t}</span>`)
        .join("");
      this.chars.push(...Array.from(word.querySelectorAll(".split-char")));
    });
  }

  splitLines(el, linesClass) {
    el.classList.add(linesClass);
    this.lines.push(el);
  }

  revert() {
    this.elements.forEach((el) => {
      const orig = this.originalHTML.get(el);
      if (orig !== undefined) {
        el.innerHTML = orig;
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
    this.originalHTML.clear();
  }
}
