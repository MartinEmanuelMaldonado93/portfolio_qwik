import { Cursor } from "@/utils/Cursor";
import type { CSSProperties } from "@builder.io/qwik";
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

type CircleProps = SVGCircleElement & {
	cursorColor?: CSSProperties["color"];
};
export default component$<CircleProps>(({ cursorColor = "#18b6f6" }) => {
	const circleRef = useSignal<SVGCircleElement>(undefined!);

	// Only client side
	useVisibleTask$(() => {
		const cursor = new Cursor(document.querySelector("svg.cursor")!);

		// cursor increase its size when  anchor tags are hovered
		const anchors = document.querySelectorAll("a");

		anchors?.forEach((link) => {
			link.addEventListener("mouseenter", () => cursor.enter());
			link.addEventListener("mouseleave", () => cursor.leave());
		});
	});

	return (
		<svg class='cursor' width='20' height='20' viewBox='0 0 20 20'>
			<circle
				ref={circleRef}
				style={`--cursor-fill: ${cursorColor}`}
				class='cursor__inner'
				cx='10'
				cy='10'
				r='5'
			/>
		</svg>
	);
});
