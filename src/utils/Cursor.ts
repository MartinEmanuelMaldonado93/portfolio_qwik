import { gsap } from "gsap";
import { getMouseCoordinates, lerp } from "./helpers";

export class Cursor {
	static mouse: { x: number; y: number };
	private renderedStyles: Record<
		string,
		{ previous: number; current: number; amt: number }
	>;
	private bounds: DOMRect | { width: number; height: number };
	private readonly AMT: number = 0.15;
	el: SVGSVGElement | SVGElement;

	constructor(el: SVGSVGElement | SVGElement) {
		this.renderedStyles = {
			tx: { previous: 0, current: 0, amt: this.AMT },
			ty: { previous: 0, current: 0, amt: this.AMT },
			scale: { previous: 1, current: 1, amt: this.AMT },
			opacity: { previous: 1, current: 1, amt: 0.1 },
		};
		this.el = el;
		this.el.style.opacity = "0";
		Cursor.mouse = { x: 0, y: 0 };

		const scrollContent = document.querySelector(".scroll-content")!;
		this.bounds = document.querySelector("svg.cursor")!.getBoundingClientRect();

		scrollContent.addEventListener("mousemove", (ev) => {
			Cursor.mouse = getMouseCoordinates(ev);
		});
		window.removeEventListener("mousemove", this.onMouseMoveEv);

		this._RAF();
	}
	private onMouseMoveEv() {
		// this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
		// 	Cursor.mouse.x - this.bounds.width / 2;

		// this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
		// 	Cursor.mouse.y - this.bounds.height / 2;

		// gsap opacity
		gsap.to(this.el, {
			duration: 0.9,
			ease: "bounce.inOut",
			opacity: 1,
		});
	}
	private _RAF() {
		this.render();
		requestAnimationFrame(() => this._RAF());
	}
	private render() {
		this.renderedStyles["tx"].current = Cursor.mouse.x - this.bounds.width / 2;

		this.renderedStyles["ty"].current = Cursor.mouse.y - this.bounds.height / 2;

		for (const key in this.renderedStyles) {
			this.renderedStyles[key].previous = lerp(
				this.renderedStyles[key].previous,
				this.renderedStyles[key].current,
				this.renderedStyles[key].amt
			);
		}

		const tX = this.renderedStyles["tx"].previous,
			tY = this.renderedStyles["ty"].previous,
			S = this.renderedStyles["scale"].previous;

		this.el.style.transform = `translateX(${tX}px) translateY(${tY}px) scale(${S})`;
		this.el.style.opacity = this.renderedStyles["opacity"].previous.toString();
	}
	enter() {
		this.renderedStyles["scale"].current = 2.5;
		this.renderedStyles["opacity"].current = 0.5;
		this.el.style.backdropFilter = "invert(70%);";
	}
	leave() {
		this.renderedStyles["scale"].current = 1;
		this.renderedStyles["opacity"].current = 1;
	}
	setColor(color: CSSStyleDeclaration["color"]) {
		this.el.style.fillColor = color;
	}
}
