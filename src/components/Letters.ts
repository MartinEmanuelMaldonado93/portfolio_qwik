import gsap from "gsap";

export class LettersAnimate {
	private charsTextClone?: HTMLElement[];
	private charsText?: HTMLElement[];
	private gsapTimeLine?: gsap.core.Timeline;

	constructor(
		container: HTMLElement,
		Splitting: (options?: Splitting.Options) => Splitting.Result,
		innerElement?: string
	) {
		innerElement && this.splitInnerElement(container, innerElement, Splitting);
	}
	runRotateAnimation() {
		if (!this.charsText || !this.charsTextClone) return;

		this.gsapTimeLine = gsap
			.timeline({
				defaults: { duration: 0.8, ease: "power2", stagger: 0.025 },
			})
			.to(this.charsText, {
				y: "100%",
				rotationX: -90,
				opacity: 1,
			})
			.to(
				this.charsTextClone,
				{
					startAt: { y: "-200%", rotationX: 90, opacity: 1 },
					y: "-100%",
					rotationX: 0,
					opacity: 1,
				},
				0
			);
	}
	resetRotateAnimation() {
		if (!this.charsText || !this.charsTextClone) return;

		this.gsapTimeLine?.kill();
		gsap
			.timeline({
				defaults: { duration: 1.5, ease: "power2", stagger: 0.025 },
			})
			.to(
				this.charsTextClone,
				{
					y: "-100%",
					rotationX: -90,
					opacity: 0,
				},

				0
			)
			.to(
				this.charsText,
				{
					startAt: { y: "100%", rotationX: -90, opacity: 0 },
					y: "0%",
					rotationX: 0,
					opacity: 1,
				},
				0
			);
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
	}
	getCollectionChars() {
		return this.charsText;
	}
}
