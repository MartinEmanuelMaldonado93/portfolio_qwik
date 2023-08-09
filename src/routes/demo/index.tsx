/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	$,
	QwikChangeEvent,
	component$,
	useSignal,
	useTask$,
	useVisibleTask$,
} from "@builder.io/qwik";
import { z } from "@builder.io/qwik-city";

type Repo = {
	name: string;
	stargazers_count: string;
};
export default component$(() => {
	const urlSchema = z.string().url();
	const url = useSignal("https://api.github.com/repos/BuilderIO/qwik");
	// const debouncedUrlValue = useSignal(url.value);
	const debouncedUrlValue = useSignal("your name");
	const responseJson = useSignal<Repo | undefined>(undefined);

	// useTask$(async ({ track, cleanup }) => {
	// 	track(() => debouncedUrlValue.value);

	// 	const debounced = setTimeout(() => {
	// 		url.value = debouncedUrlValue.value;
	// 	}, 1000);

	// 	const res = await fetch(url.value);
	// 	const json = await res.json();
	// 	responseJson.value = json;
	// 	cleanup(() => clearTimeout(debounced));
	// });

	return (
		<>
			<p class="text-center">
				{responseJson.value?.name} has{" "}
				{responseJson.value?.stargazers_count} ✨'s
			</p>
			{/* <input name="url" bind:value={url} style={{ width: "100%" }} /> */}
			<SimpleInputComponent />
		</>
	);
});

const SimpleInputComponent = component$(function () {
	const simpleValue = useSignal("your Name");

	return (
		<div class="text-center">
			<div>value : {simpleValue.value}</div>
			<input
				name="url"
				type="text"
				placeholder={simpleValue.value}
				bind:value={simpleValue}
			/>
		</div>
	);
});
