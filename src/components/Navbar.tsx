import { component$ } from "@builder.io/qwik";

export const Navbar = component$(() => {
	return (
		<div class='hidden sm:flex p-4 sticky bg-transparent filter'>
			<span>
				<a>- M. E.</a>
			</span>
		</div>
	);
});
