import { component$ } from "@builder.io/qwik";

export const About = component$(() => {
  
	return (
		<div id='about' class='min-h-[50vh]'>
			<div
				class='p-4 mx-auto max-w-sm border border-black rounded-md 
        backdrop-hue-rotate-60 backdrop-opacity-75'
			>
				<div class='flex justify-between p-2 mb-2 '>
					<span>About: </span>
					<a href='resume.pdf' class='underline underline-offset-1'>
						resume
					</a>
				</div>
				<div class='my-2'>
					<img
						class='rounded-sm mx-auto grayscale hover:grayscale-0 transition-[filter] duration-700'
						src='/profile_photo/profile_ph.jpg'
						width={200}
					/>
				</div>
				<section id='slide-paragraph' class='px-2'>
					<p class='whitespace-pre-line'>
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
				<button class='inline px-2 mx-auto text-black rounded-lg'>
					See More
				</button>
			</div>
		</div>
	);
});
