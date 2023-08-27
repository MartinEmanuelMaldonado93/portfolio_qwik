import { animate, stagger, timeline } from "motion";
import type { AnimationControls } from "motion";
const DURATION = 1;

export class LettersAnimate {
	private charsTextClone?: HTMLElement[];
	private charsText?: HTMLElement[];
	private motionTimeLine?: AnimationControls;

	constructor(
		container: HTMLElement,
		Splitting: (options?: Splitting.Options) => Splitting.Result,
		innerElement?: string
	) {
		innerElement && this.splitInnerElement(container, innerElement, Splitting);
	}
	splitInnerElement(
		container: HTMLElement,
		innerElement: string,
		Splitting: (options?: Splitting.Options) => Splitting.Result
	) {
		const titleText = container.querySelector(innerElement);
		if (!titleText) throw new Error("innerElement selector not founded");

		const titleTextClone = titleText.cloneNode(true);
		titleTextClone.classList.add("title-clone");

		container.appendChild(titleTextClone);

		/** Split into chars */
		Splitting({ target: container });

		/** Load array of chars */
		this.charsTextClone = [...titleTextClone.querySelectorAll(".char")!];
		this.charsText = [...titleText.querySelectorAll(".char")!];

		this.charsTextClone.forEach((i) => {
			i.style.opacity = "0";
      i.style.transformStyle = "preserve-3d";
			i.style.transform = "translateY(-100%) rotateX(-90deg)";
      i.style.transformOrigin = "top left";
		});
		this.charsText.forEach((i) => {
			i.style.opacity = "0";
      i.style.transformStyle = "preserve-3d";
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
				opacity: 1,
				transform: "translateY(0) rotateX(0deg)",
			},
			{
				duration: 0.8,
				easing: "ease-in-out",
				delay: stagger(0.025, { start: 0.4 }),
			}
		);
	}
	runRotateAnimation() {
		if (!this.charsText || !this.charsTextClone) return;

		this.motionTimeLine = timeline(
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
			{ duration: DURATION }
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
			{ duration: DURATION }
		);
	}
	get CollectionChars() {
		return this.charsText;
	}
}
