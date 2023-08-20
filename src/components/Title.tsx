import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import styles from "./Title.css?inline";
import { LettersAnimate } from "./Letters";
import Footer from "./footer";
import { animate, stagger } from "motion";

const $$ = (selector: string) => document.querySelector(selector);

export const Title = component$(() => {
	useStyles$(styles);

	useVisibleTask$(() => {
		const container = $$(".title__container")!;
		const letters = new LettersAnimate(container, Splitting, ".title__text");
		// add listeners
		container.addEventListener("mouseenter", () =>
			letters.runRotateAnimation()
		);
		container.addEventListener("mouseleave", () =>
			letters.resetRotateAnimation()
		);

		const description = $$(".title__description")!;

		Splitting({ target: description });
		const descriptionChars = [...description.querySelectorAll(".char")!];

    const delayBase = 1.3;
		animate(
			descriptionChars,
			{
				opacity: 1,
			},
			{
				duration: 1,
				delay: stagger(0.025, { start: delayBase }),
				easing: (t: number) => Math.pow(t, 3),
			}
		);

		const brief = $$(".title__brief")!;
		animate(
			brief,
			{ opacity: 1, transform: "translateY(0)" },
			{
				duration: 1,
				easing: "ease-in-out",
				delay: delayBase + 1,
			}
		);

		const buttonWork = $$(".title__btn")!;
		animate(
			buttonWork,
			{
				opacity: 1,
				transform: "translateY(0)",
			},
			{
				duration: 1.5,
				easing: "ease",
				delay: delayBase + 2,
			}
		);
	});

	return (
		<>
			<div id='home' class='flex flex-col min-h-screen justify-evenly px-4'>
				<div class='text-xl '>
					<span class=''>Hi ! </span>
					<div class='title__container'>
						<div class='title__text'>I&apos;m Martin Emanuel</div>
					</div>
				</div>
				<div class='title__description text-3xl'>
					<div class=''>I make</div>
					<div> cool things for the web.</div>
				</div>
				<p class='title__brief text-center'>
					Web Design | 3D Graphics | Motion
				</p>
				<div class='title__btn text-center '>
					<a href='#work' class='text-center border rounded-lg px-4 py-2'>
						See my work !
					</a>
				</div>
			</div>
		</>
	);
});
