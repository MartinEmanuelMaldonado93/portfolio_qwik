import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting"; // import gsap from "gsap";
import styles from "./Title.css?inline";
import { LettersAnimate } from "./Letters";
import gsap from "gsap";
import Footer from "./footer";

export const Title = component$(() => {
	useStyles$(styles);

	useVisibleTask$(() => {
		const container = document.querySelector(".title__container")!;
		const letters = new LettersAnimate(container, Splitting, ".title__text");
		//first animation
		letters.slideFromSide();
		container.addEventListener("mouseenter", () => letters.runAnimation());
		container.addEventListener("mouseleave", () => letters.resetAnimation());

		const description = document.querySelector(".title__description")!;
		Splitting({ target: description });
		const descriptionChars = [...description.querySelectorAll(".char")!];

		gsap
			.timeline({
				defaults: {
					duration: 1,
					ease: "power3",
					stagger: 0.025,
					delay: 0.8,
				},
			})
			.to(descriptionChars, {
				opacity: "1",
			});
		const brief = document.querySelector(".title__brief");
		gsap
			.timeline({
				defaults: {
					duration: 1,
					ease: "power3",
					stagger: 0.025,
					delay: 1.8,
				},
			})
			.to(brief, { opacity: 1, y: 0 });

		const workButton = document.querySelector(".title__btn");
		gsap
			.timeline({
				defaults: {
					duration: 1,
					ease: "power3",
					delay: 2,
				},
			})
			.to(workButton, { y: 0, opacity: 1 });
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
			<Footer />
		</>
	);
});
