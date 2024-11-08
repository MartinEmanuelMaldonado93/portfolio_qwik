import { component$, useSignal } from "@builder.io/qwik";
import { BsDownload } from "@qwikest/icons/bootstrap";
import { Image } from "@unpic/qwik";

export const About = component$(() => {
  const toggle = useSignal(false);

  return (
    <div id="about" class="min-h-[50vh]">
      <div class="mx-auto flex max-w-md flex-col gap-4  rounded-md border border-gray-transparent p-4 backdrop-brightness-125 lg:max-w-lg">
        <div class="mb-2 flex justify-between p-2 lg:text-xl">
          <span class="text-secondary">About: </span>
          <a
            href="/pdf/MartinMaldonado_cv_2024.pdf"
            target="_blank"
            class="rounded-md border border-gray-transparent px-2"
          >
            <span class="pr-2 text-sm">Resume</span>
            <BsDownload class="inline  " />
          </a>
        </div>
        <div class="img-container my-2">
          <Image
            class="mx-auto aspect-square rounded-sm object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
            src="/profile_photo/profile_ph.jpg"
            alt="profile photo"
            width={200}
          />
        </div>
        <section id="p-container" class="grid px-2">
          <p
            class="first-p mx-auto max-w-lg whitespace-pre-line lg:text-xl"
            style={{
              gridColumn: "1/1",
              gridRow: "1/1",
              transition: "opacity .5s",
              opacity: toggle.value ? "0" : "1",
            }}
          >
            I'm a web dev with a serious crush on React, TypeScript, and Three.js. Basically, I'm a computer graphics fanboy always hunting for new ways to make the web look cooler. Think 3D, polygons, and way too much mate 🧉 I've got it covered!
          </p>
          <p
            class="second-p lg:text-xl"
            style={{
              gridColumn: "1/1",
              gridRow: "1/1",
              transition: "opacity 1s",
              opacity: toggle.value ? "1" : "0",
            }}
          >
            Learning from experienced devs is my secret weapon—nothing like a few pro tips to keep things sharp and exciting...
          </p>
        </section>
        <button
          class="mx-auto inline rounded-lg border px-2 hover:border-secondary lg:text-md "
          onClick$={() => {
            toggle.value = !toggle.value;
          }}
        >
          See More
        </button>
      </div>
    </div>
  );
});
