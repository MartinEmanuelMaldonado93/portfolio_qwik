import type { CSSProperties, Signal } from "@builder.io/qwik";

type cursorProps = {
	cursorColor?: CSSProperties["color"];
	reference: Signal<SVGElement>;
};
export const SvgCursor = ({
	cursorColor = "#18b6f6",
	reference,
}: cursorProps) => {
	return (
		<svg
			ref={reference}
			class='cursor'
			width='20'
			height='20'
			viewBox='0 0 20 20'
		>
			<circle
				style={`--cursor-fill: ${cursorColor}`}
				class='cursor__inner'
				cx='10'
				cy='10'
				r='5'
			/>
		</svg>
	);
};
