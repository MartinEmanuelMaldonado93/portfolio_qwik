import { component$ } from "@builder.io/qwik";
// hsl(182, 39%, 47%)
export const Experiments = component$(() => {
  return (
    <div class="mx-auto mt-8 flex min-h-screen max-w-5xl flex-col items-center px-4">
      <div id="big title" class="mx-auto text-center text-2xl">
        3D Graphics - Motion - Creative code
      </div>
      <div class="max-w-2xl p-4 text-center">
        A web-based collection of projects to produce cutting-edge visual
        effects and make innovative websites.
      </div>
      <div class="card my-4 w-full  max-w-2xl">
        <div class="border-gray-transparent bg-black-transparent rounded-md border px-2 py-2  transition-all duration-300 hover:border-secondary hover:shadow-xl">
          <div class="flex  items-center justify-between">
            <div>
              <div class="text-2xl capitalize">sub title </div>
              <div class="text-lg ">Ray marching inoasdojasd aosqw</div>
              <div class="flex gap-2">
                <span class="rounded-sm px-1 capitalize text-gray-200 opacity-70 ">
                  shaders
                </span>
                <span class="rounded-sm px-1 capitalize text-gray-200 opacity-70">
                  three.js
                </span>
                <span class="rounded-sm px-1 capitalize text-gray-200 opacity-70 ">
                  r3f
                </span>
              </div>
            </div>
            <img
              class="max-w-sm rounded-md object-scale-down shadow-2xl"
              src="/projects_img/open.png"
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
