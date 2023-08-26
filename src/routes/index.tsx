import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import LocomotiveScroll from "locomotive-scroll";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SvgCursor } from "~/src/components/SvgCursor";
import { Navbar } from "@/components/Navbar";
import { Title } from "@/components/Title";
import { GridBackground } from "@/components/GridBackground";
import { Experiments } from "@/components/Experiments";
import { WorkExperience } from "@/components/WorkExperience";
import { Footer } from "@/components/Footer";
import { Cursor } from "../utils/Cursor";

// import { routeLoader$ } from "@builder.io/qwik-city";
// import { createServerClient } from "supabase-auth-helpers-qwik";
// export const useDBTest = routeLoader$(async (requestEv) => {
// 	const supabaseClient = createServerClient(
// 		requestEv.env.get("PUBLIC_SUPABASE_URL")!,
// 		requestEv.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
// 		requestEv
// 	);
// 	const { data } = await supabaseClient.from("test").select("*");
// 	return { data };
// });

export default component$(() => {
	const ref_cursor = useSignal<SVGElement>(null!);

	useVisibleTask$(() => {
		new LocomotiveScroll();

		const cursor = new Cursor(ref_cursor.value);
		const anchors = document.querySelectorAll("a");
		anchors?.forEach((link) => {
			link.addEventListener("mouseenter", () => cursor.enter());
			link.addEventListener("mouseleave", () => cursor.leave());
		});
	});

	return (
		<div class='min-h-screen'>
			<Navbar />
			<Title />
			<WorkExperience />
			<Experiments />
			<Footer />
			<GridBackground />
			<SvgCursor reference={ref_cursor} />
		</div>
	);
});

export const head: DocumentHead = {
	title: "Martin Maldonado",
	meta: [
		{
			name: "description",
			content: "Martin Maldonado personal portfolio",
		},
	],
};

const InlineComp = () => {
	return (
		<div class='w-52 mx-auto'>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam
				quibusdam molestiae repudiandae praesentium,
				<b /> perferendis repellat sunt architecto,
				<b /> sit voluptatibus sint nemo minus, harum atque numquam. Nisi error
				magni fuga.
			</p>
			<b />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. <b />
				Quis ipsam quibusdam molestiae repudiandae praesentium,
				<b /> perferendis repellat sunt architecto, sit voluptatibus sint nemo
				minus,
				<b /> harum atque numquam. Nisi error magni fuga.
			</p>
			<b />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam
				quibusdam molestiae repudiandae praesentium, <b /> perferendis repellat
				<b />
				sunt architecto, sit voluptatibus sint nemo minus, harum atque numquam.
				Nisi error magni fuga.
			</p>
			<b />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam
				<b />
				quibusdam molestiae repudiandae praesentium, <b /> perferendis repellat
				sunt architecto, sit voluptatibus sint nemo minus, harum atque numquam.
				Nisi error magni fuga.
			</p>
		</div>
	);
};
