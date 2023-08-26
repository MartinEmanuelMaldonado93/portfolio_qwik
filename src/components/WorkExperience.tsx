import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { workExpData } from "../data/WorkExperience";
import { animate, inView, stagger } from "motion";

export const WorkExperience = component$(() => {
	return (
		<div id='page-container' class='flex flex-col min-h-screen justify-center'>
			{workExpData.map((data) => (
				<CardWorkExperience key={Math.random().toString()} {...data} />
			))}
		</div>
	);
});

type CardProps = {
	title: string;
	location: string;
	role: string | string[];
	description: string;
	stack?: string;
	points: string[];
	img_url: string;
	bg_tw?: string;
	alt: string;
};
const CardWorkExperience = component$((props: CardProps) => {
	useVisibleTask$(() => {
		inViewItems(document.querySelectorAll("ul.list-container")!);
		// Todo displacement
	});
	return (
		<div class={`${props.bg_tw ? props.bg_tw : "bg-black"} bg-opacity-50`}>
			<div class='flex flex-col-reverse items-center justify-evenly max-w-7xl p-4 mx-auto sm:flex-row-reverse'>
				<img
					class={`max-w-sm w-full aspect-square grow object-scale-down rounded-lg shadow-2xl`}
					src={props.img_url}
					alt={props.alt}
					width={300}
					height={300}
				/>
				<div class='p-4'>
					<div class='text-4xl font-bold'>
						{props.title}{" "}
						<span class='text-sm text-gray-500'>{props.location}</span>
					</div>
					<div>{props.role}</div>
					<p class='py-5 max-w-sm'>{props.description}</p>
					<ul class='list-container max-w-lg text-gray-300'>
						{props.points.map((item) => (
							<li
								key={Math.random().toString()}
								class='list-disc mt-2 opacity-0'
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
});

/** @description animation */
function inViewItems(el: NodeListOf<HTMLUListElement>) {
	inView(
		el,
		({ target }) => {
			animate(
				target.querySelectorAll("li")!,
				{
					y: ["30%", "0%"],
					opacity: [0, 1],
					scale: [0.9, 1],
				},
				{ easing: "ease-out", delay: stagger(0.1), duration: 0.5 }
			);
		},
		{
			margin: "-25%",
		}
	);
}
