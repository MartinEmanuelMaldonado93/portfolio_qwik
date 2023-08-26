import { component$ } from "@builder.io/qwik";

export const About = component$(() => {
	return (
		<div id='about'>
			<div>
				<div>
					title
					<a href='resume.pdf'>download</a>
				</div>
				<div>{/* image */}</div>
				<section id='slide-paragraph'>
					<p>
						I&apos; always been that person who loves to see how things work
						I&apos;ve disassembled numerous electronic devices to explore their
						inner workings like a hobby!... Then, one day, I got curious about
						tweaking their behavior, and that's when I stumbled upon programming
						languages like C...
					</p>
					<p class='hidden'>
						Although I spent a brief period at university and dabbled in Arduino
						projects, my passion has always been centered around design and
						creative ideation. Discovering frontend development marked a
						significant turning point, and I've since been dedicated to
						continuous self-directed learning in this field
					</p>
				</section>
				<button>See More</button>
			</div>
		</div>
	);
});
