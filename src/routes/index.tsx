import CursorWrap from "@/components/CursorWrap";
import { Navbar } from "@/components/Navbar";
import { Title } from "@/components/Title";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
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
	useVisibleTask$(() => {
		const isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			);
		const el = document.querySelector("body")!;
		Scrollbar.use(OverscrollPlugin);
		Scrollbar.init(el, {
			damping: isMobile ? 0.05 : 0.1,
			continuousScrolling: true,
			thumbMinSize: 20,
			renderByPixels: Boolean("ontouchstart" in document),
			plugins: {
				overscroll: {
					enable: true,
					effect: "bounce",
					damping: 0.2,
					maxOverscroll: 150,
					glowColor: "#222a2d",
				},
			},
		});
	});

	return (
		<div class='min-h-screen'>
			<Navbar />
			<Title />
			<InlineComp />
			<CursorWrap />
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
