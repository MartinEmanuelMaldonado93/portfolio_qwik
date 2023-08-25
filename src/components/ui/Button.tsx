import { component$, Slot } from "@builder.io/qwik";
import type { QwikIntrinsicElements } from "@builder.io/qwik";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "./utils";

export const btnVariants = cva("text-center border rounded-lg px-4 py-2", {
	variants: {
		variant: {
			default: "TODO",
			primary: "",
		},
		size: {
			default: "md",
			sm: "ha",
		},
	},
});

type QwikBtn = QwikIntrinsicElements["button"];
export interface Props extends QwikBtn, VariantProps<typeof btnVariants> {
	sizeText?: "sm" | "md" | "xl";
}

export const Button = component$(
	({ sizeText = "md", variant, size, ...props }: Props) => {
		const variantsResult = btnVariants({ variant, size });
		return (
			<button {...props} class={cn(variantsResult)}>
				{/* <Slot></Slot> */}
			</button>
		);
	}
);
