import { component$ } from "@builder.io/qwik";
// hsl(182, 39%, 47%)
export default component$(() => {
	return (
		<div class='px-4 min-h-screen '>
			<div id='big title' class='text-center'>
				3D Graphics | Motion | Creative code
			</div>
			<div class='text-center'>
				A web-based collection of projects to produce cutting-edge visual
				effects and make innovative websites.
			</div>
			<div class='card container my-4'>
				<div class='border  border-[hsl(182, 39%, 47%)] hover:shadow-xl  rounded-md px-2 py-2'>
					<div class='flex justify-between items-center'>
						<div>
							<div class='text-2xl capitalize '>sub title </div>
							<div class='text-lg '>Ray marching inoasdojasd aosqw</div>
							<span class='m-1 px-1 bg-gray-100 opacity-70 rounded-sm text-gray-900 '>
								shaders
							</span>
							<span class='m-1 px-1 bg-slate-100 opacity-70 rounded-sm text-gray-900'>
								{" "}
								three.js
							</span>
							<span class='m-1 px-1 bg-slate-100 opacity-70 rounded-sm text-gray-900 '>
								r3f
							</span>
						</div>
						<img
							class='max-w-sm object-scale-down rounded-md shadow-2xl'
							src='/projects_img/open.png'
							alt={"qscyoo"}
							width={"150"}
							height={"150"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
});
