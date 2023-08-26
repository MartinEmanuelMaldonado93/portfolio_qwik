import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../routes/layout";

export const Footer = component$(() => {
	const serverTime = useServerTimeLoader();
	return (
		<footer>
			<div class='text-center'>
				<span>
					© {serverTime.value.date.getFullYear()} Design & Code Martin Emanuel.
				</span>
			</div>
		</footer>
	);
});
