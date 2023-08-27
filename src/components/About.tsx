import { component$, useSignal } from "@builder.io/qwik";
import { BsDownload } from "@qwikest/icons/bootstrap";

export const About = component$(() => {
  const toggle = useSignal(false);

  return (
    <div id="about" class="min-h-[50vh]">
      <div class="border-gray-transparent mx-auto flex max-w-md flex-col  gap-4 rounded-md border p-4 backdrop-brightness-125 lg:max-w-lg">
        <div class="mb-2 flex justify-between p-2 lg:text-xl">
          <span class="text-secondary">About: </span>
          <a
            href="/pdf/MartinMaldonado.cv.pdf"
            target="_blank"
            class="underline underline-offset-1"
          >
            <span class="pr-2">Resume</span>
            <BsDownload class="inline  " />
          </a>
        </div>
        <div class="img-container my-2">
          <img
            class="mx-auto aspect-square rounded-sm object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
            src="/profile_photo/profile_ph.jpg"
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
              transitionDelay: "0.5s",
              opacity: toggle.value ? "0" : "1",
            }}
          >
            I&apos; always been that person who loves to see how things work
            I&apos;ve disassembled numerous electronic devices to explore their
            inner workings like a hobby!... Then, one day, I got curious about
            tweaking their behavior, and that's when I stumbled upon programming
            languages like C...
          </p>
          <p
            class="second-p"
            style={{
              gridColumn: "1/1",
              gridRow: "1/1",
              transition: "opacity .5s",
              transitionDelay: "0.3s",
              opacity: toggle.value ? "1" : "0",
            }}
          >
            Although I spent a brief period at university and dabbled in Arduino
            projects, my passion has always been centered around design and
            creative ideation. Discovering frontend development marked a
            significant turning point, and I've since been dedicated to
            continuous self-directed learning in this field
          </p>
        </section>
        <button
          class="mx-auto inline rounded-lg border px-2 hover:border-secondary lg:text-xl "
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
