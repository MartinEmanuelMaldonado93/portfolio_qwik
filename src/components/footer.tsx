import { component$ } from "@builder.io/qwik";
// import { useServerTimeLoader } from "../routes/layout";

export const Footer = component$(() => {
	// const serverTime = useServerTimeLoader();
	const serverTime = new Date();
	return (
		<footer>
			<div class='text-center'>
				<span>
					© {serverTime.getFullYear()} Design & Code Martin Emanuel.
				</span>
			</div>
		</footer>
	);
});
