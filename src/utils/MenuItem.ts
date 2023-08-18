import { lerp } from "./helpers";
import { gsap } from "gsap";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();

export class MenuItem {
	tl: any;
	inMenuPosition: any;
	animatableProperties: any;
	_ID_RAF: number | undefined;
	isPositionOdd: any;
	hoverTimeout?: NodeJS.Timeout;
	hoverEnter: boolean | null | undefined;
	firstRAFCycle: boolean | undefined;
	bounds: { el: DOMRect; reveal: any; width: any; height: any }; // depends of DOM
	animateCharsTimeline: gsap.core.Timeline | undefined;
	mouseenterFn: (() => void) | undefined;
	mouseleaveFn: (() => void) | undefined;
	DOM: {
		titleCloneChars?: HTMLSpanElement[];
		titleChars?: HTMLSpanElement[];
		wordClone?: HTMLElement;
		word?: HTMLElement | null;
		el?: any;
		reveal?: any;
		textInner?: HTMLSpanElement;
	};

	constructor(
		el: HTMLAnchorElement,
		inMenuPosition: any,
		animatableProperties: any
	) {
		this.DOM = { el: el };
		this.bounds = {
			el: this.DOM.el.getBoundingClientRect(),
			reveal: this.DOM.reveal.getBoundingClientRect(),
			width: this.DOM.reveal.offsetWidth,
			height: this.DOM.reveal.offsetHeight,
		};
		this.inMenuPosition = inMenuPosition;
		this.animatableProperties = animatableProperties;
		this.layout();
		this.initEvents();
	}
	layout() {
		// title text/chars elements
		this.DOM.textInner = this.DOM.el.querySelector(".menu__item-text"); //span with title
		this.DOM.word = this.DOM!.textInner!.querySelector(".word")!; // .word is created by splitting.js
		this.DOM.wordClone = this.DOM.word.cloneNode(true); // copy
		this.DOM.wordClone.classList.add("word--clone"); // add programatically word-clone class
		this.DOM!.textInner!.appendChild(this.DOM.wordClone); // add copy

		// all text chars (Splittingjs)
		this.DOM.titleChars = [...this.DOM.word.querySelectorAll("span.char")!];
		this.DOM.titleCloneChars = [
			...this.DOM.wordClone.querySelectorAll("span.char")!,
		];
	}
	// calculate the position/size of both the menu item and reveal element
	calcBounds() {
		this.bounds = {
			el: this.DOM.el.getBoundingClientRect(),
			reveal: this.DOM.reveal.getBoundingClientRect(),
			width: this.DOM.reveal.offsetWidth,
			height: this.DOM.reveal.offsetHeight,
		};
	}
	// bind some events
	initEvents() {
		// set timeoutss
		this.mouseenterFn = () => {
			this.hoverTimeout = setTimeout(() => {
				this.hoverEnter = true;
				this.firstRAFCycle = true;

				this.DOM.reveal.style.transformOrigin = "100% 0%";
				// animate the title characters
				this.animateCharsIn();
				// show the image element
				//this.showImage();

				// start the render loop animation (rAF)
				this.loopRender();
			}, 100);
		};
		this.mouseleaveFn = () => {
			if (this.hoverTimeout) {
				clearTimeout(this.hoverTimeout);
			}
			if (this.hoverEnter) {
				this.hoverEnter = null;
				// stop the render loop animation (rAF)
				this.stopRendering();
				this.animateCharsOut();
			}
		};

		this.DOM.el.addEventListener("mouseenter", this.mouseenterFn);
		this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn);
	}
	// animate with gsap
	// we need animate both the copy and the original one
	animateCharsIn() {
		this.animateCharsTimeline = gsap
			.timeline({
				defaults: { duration: 0.5, ease: "power3", stagger: 0.025 },
			})
			// original goes out
			.to(this.DOM.titleChars!, {
				y: "100%",
				rotationX: -90,
				opacity: 0,
			})
			// clone comes in
			.to(
				this.DOM.titleCloneChars!,
				{
					startAt: { y: "-100%", rotationX: 90, opacity: 0 },
					y: "0%",
					rotationX: 0,
					opacity: 1,
				},
				0
			);
	}

	animateCharsOut() {
		if (this.animateCharsTimeline) this.animateCharsTimeline.kill();

		this.animateCharsTimeline = gsap
			.timeline({
				defaults: { duration: 0.5, ease: "power2", stagger: 0.025 },
			})
			.to(this.DOM.titleCloneChars!, {
				y: "-100%",
				rotationX: 90,
				opacity: 0,
			})
			.to(
				this.DOM.titleChars!,
				{
					startAt: { y: "100%", rotationX: -90, opacity: 0 },
					y: "0%",
					rotationX: 0,
					opacity: 1,
				},
				0
			);
	}

	// start the render loop animation (rAF)
	loopRender() {
		if (this._ID_RAF) return;

		this._ID_RAF = window.requestAnimationFrame(() => this.render());
	}
	// stop the render loop animation (rAF)
	stopRendering() {
		if (!this._ID_RAF) return;

		window.cancelAnimationFrame(this._ID_RAF);
		this._ID_RAF = undefined;
	}
	// translate the item as the mouse moves
	render() {
		this._ID_RAF = undefined;

		// set up the interpolated values
		// for the first cycle, both the interpolated values need to be the same so there's no "lerped" animation between the previous and current state
		this.animatableProperties.tx.previous = this.firstRAFCycle
			? this.animatableProperties.tx.current
			: lerp(
					this.animatableProperties.tx.previous,
					this.animatableProperties.tx.current,
					this.animatableProperties.tx.amt
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  );
		this.animatableProperties.ty.previous = this.firstRAFCycle
			? this.animatableProperties.ty.current
			: lerp(
					this.animatableProperties.ty.previous,
					this.animatableProperties.ty.current,
					this.animatableProperties.ty.amt
			  );
		this.animatableProperties.rotation.previous = this.firstRAFCycle
			? this.animatableProperties.rotation.current
			: lerp(
					this.animatableProperties.rotation.previous,
					this.animatableProperties.rotation.current,
					this.animatableProperties.rotation.amt
			  );
		this.animatableProperties.brightness.previous = this.firstRAFCycle
			? this.animatableProperties.brightness.current
			: lerp(
					this.animatableProperties.brightness.previous,
					this.animatableProperties.brightness.current,
					this.animatableProperties.brightness.amt
			  );

		// set styles
		gsap.set(this.DOM.reveal, {
			x: this.animatableProperties.tx.previous,
			y: this.animatableProperties.ty.previous,
			rotation: this.animatableProperties.rotation.previous,
			//filter: `brightness(${this.animatableProperties.brightness.previous})`
		});

		// loop
		this.firstRAFCycle = false;
		this.loopRender();
	}
}
