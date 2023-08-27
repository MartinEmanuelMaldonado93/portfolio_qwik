import { component$ } from "@builder.io/qwik";
// hsl(182, 39%, 47%)
export const Experiments = component$(() => {
  return (
    <div class="mt-8 min-h-screen px-4">
      <div id="big title" class="text-center text-2xl">
        3D Graphics - Motion - Creative code
      </div>
      <div class="p-4 text-center">
        A web-based collection of projects to produce cutting-edge visual
        effects and make innovative websites.
      </div>
      <div class="card container my-4">
        <div class="border-gray-transparent bg-black-transparent rounded-md border px-2 py-2  transition-all duration-300 hover:border-secondary hover:shadow-xl">
          <div class=" flex items-center justify-between ">
            <div>
              <div class="text-2xl capitalize">sub title </div>
              <div class="text-lg ">Ray marching inoasdojasd aosqw</div>
              <span class="m-1 rounded-sm px-1 text-gray-900 opacity-70 ">
                shaders
              </span>
              <span class="m-1 rounded-sm px-1 text-gray-900 opacity-70">
                {" "}
                three.js
              </span>
              <span class="m-1 rounded-sm px-1 text-gray-900 opacity-70 ">
                r3f
              </span>
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
