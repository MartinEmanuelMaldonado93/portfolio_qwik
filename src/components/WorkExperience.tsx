import { ImageGallery } from "@/integrations/react/framerGallery";
import { component$ } from "@builder.io/qwik";

export const WorkExperience = component$(() => {
	return (
		<div class='flex flex-col justify-center'>
			<div class='text-2xl text-center'> work experience</div>
      <ImageGallery client:visible/>
			{/* client:load when when document loads */}
			{/* client:idle when browser is idle */}
			{/* client:visible when the viewport is visible */}
			{/* client:hover when hover */}
			{/* client:signal when signal true */}
			{/* client:event="click" */}
			{/* client:only only in browser , no ssr */}
		</div>
	);
});
