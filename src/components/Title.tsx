import {
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { animate, stagger } from "motion";
import Splitting from "splitting";
import "splitting/dist/splitting-cells.css";
import "splitting/dist/splitting.css";
import { LettersAnimate } from "./Letters";

export const Title = component$(() => {
  const ref_titleContainer = useSignal<HTMLDivElement>(null!);
  const ref_titleDescription = useSignal<HTMLDivElement>(null!);
  const ref_titleBrief = useSignal<HTMLDivElement>(null!);
  useStyles$(`
    .char { opacity: 0; }
  `);
  useVisibleTask$(() => {
    const container = ref_titleContainer.value;
    const letters = new LettersAnimate(container, Splitting, ".title__text");

    container.addEventListener("mouseenter", () =>
      letters.runRotateAnimation(),
    );
    container.addEventListener("mouseleave", () =>
      letters.resetRotateAnimation(),
    );

    const description = ref_titleDescription.value;
    Splitting({ target: description });
    const descriptionChars = [...description.querySelectorAll(".char")!];

    const delayBase = 1.3;
    animateDescriptionChars(descriptionChars, delayBase);
    animateTitleBrief(ref_titleBrief.value, delayBase);
  },{ strategy: 'document-ready'});

  return (
    <div
      id="home"
      class=" flex min-h-screen -translate-y-10 flex-col justify-evenly px-4 sm:translate-y-0 sm:items-center sm:justify-evenly sm:gap-5 md:gap-0 "
    >
      <div class="text-2xl md:text-3xl">
        <span class="hi animate-fade-in text-center opacity-0">Hi ! </span>
        <div ref={ref_titleContainer} class="title__container">
          <div class="title__text max-w-sm">I&apos;m Martin Emanuel</div>
        </div>
      </div>
      <div
        ref={ref_titleDescription}
        class="title__description text-4xl md:text-5xl"
      >
        <div class="md:text-center">I make</div>
        <div> cool things for the web.</div>
      </div>
      <p ref={ref_titleBrief} class="translate-y-[100%] text-center opacity-0">
        Web Design | 3D Graphics | Motion
      </p>
    </div>
  );
});

function animateDescriptionChars(chars: HTMLElement[], delayBase: number) {
  animate(
    chars,
    {
      opacity: [1],
    },
    {
      duration: 1,
      delay: stagger(0.025, { start: delayBase }),
      easing: (t: number) => Math.pow(t, 3),
    },
  );
}
function animateTitleBrief(el: HTMLDivElement, delayBase: number) {
  animate(
    el,
    { opacity: [1], y: ["0%"] },
    {
      duration: 1,
      easing: "ease-in-out",
      delay: delayBase + 1,
    },
  );
}
