import { animate, stagger, timeline } from "motion";

type SplittingFunc = (options?: Splitting.Options) => Splitting.Result;
const DURATION = 1;

export class AnimateLetters {
  private charsTextClone?: HTMLElement[];
  private charsText?: HTMLElement[];

  constructor(
    Splitting: SplittingFunc,
    container: HTMLElement,
    innerElement: HTMLElement,
  ) {
    this.splitInnerElement(Splitting, container, innerElement);
  }

  private splitInnerElement(
    Splitting: SplittingFunc,
    container: HTMLElement,
    innerText: HTMLElement,
  ) {
    const textClone = innerText.cloneNode(true);
    textClone.classList.add("title-clone");

    container.appendChild(textClone);

    /** Split into chars */
    Splitting({ target: container });

    /** Load array of chars */
    this.charsText = [...innerText.querySelectorAll(".char")!];
    this.charsTextClone = [...textClone.querySelectorAll(".char")!];

    this.charsTextClone.forEach((i) => {
      i.style.opacity = "0";
      i.style.transform = "translateY(-100%) rotateX(-90deg)";
      i.style.transformOrigin = "top left";
    });

    this.runFirstRotateAnimation();
  }

  private runFirstRotateAnimation() {
    if (!this.charsText) return;

    animate(
      this.charsText,
      {
        opacity: [0, 1],
        transform: "translateY(0) rotateX(0deg)",
      },
      {
        duration: 0.8,
        easing: "ease-in-out",
        delay: stagger(0.025, { start: 0.4 }),
      },
    );
  }
  runRotateAnimation() {
    if (!this.charsText || !this.charsTextClone) return;

    timeline(
      [
        [
          this.charsText,
          {
            opacity: 0,
            transform: "translateY(-40%) rotateX(-90deg)",
          },
          { delay: stagger(0.024), easing: "ease" },
        ],
        [
          this.charsTextClone,
          {
            opacity: 1,
            transform: "translateY(-100%) rotateX(0deg)",
          },
          { delay: stagger(0.024), at: 0, easing: "ease" },
        ],
      ],
      { duration: DURATION },
    );
  }
  resetRotateAnimation() {
    if (!this.charsText || !this.charsTextClone) return;

    timeline(
      [
        [
          this.charsTextClone,
          {
            opacity: 0,
            transform: "translateY(0%) rotateX(-90deg)",
          },
          {
            delay: stagger(0.025),
          },
        ],
        [
          this.charsText,
          {
            opacity: 1,
            transform: "translateY(0) rotateX(0deg)",
          },
          { delay: stagger(0.024), at: 0 },
        ],
      ],
      { duration: DURATION },
    );
  }
  get CollectionChars() {
    return this.charsText;
  }
}
