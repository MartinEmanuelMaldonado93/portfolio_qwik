import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { LettersAnimate } from "./Letters";
import { animate, stagger } from "motion";

export const Title = component$(() => {
  const ref_titleContainer = useSignal<HTMLDivElement>(null!);
  const ref_titleDescription = useSignal<HTMLDivElement>(null!);
  const ref_titleBrief = useSignal<HTMLDivElement>(null!);
  const ref_titleBtn = useSignal<HTMLDivElement>(null!);

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

    const hi = document.querySelector("span.hi")!;
    animate(
      hi,
      {
        opacity: [0, 1],
        rotateX: ["-90deg", "0"],
        y: ["-100%", "0"],
      },
      { delay: 0.5, easing: "ease-in" },
    );
    const delayBase = 1.3;
    animate(
      descriptionChars,
      {
        opacity: [0, 1],
      },
      {
        duration: 1,
        delay: stagger(0.025, { start: delayBase }),
        easing: (t: number) => Math.pow(t, 3),
      },
    );
    animate(
      ref_titleBrief.value,
      { opacity: [0, 1], y: ["180%", "0%"] },
      {
        duration: 1,
        easing: "ease-in-out",
        delay: delayBase + 1,
      },
    );
    animate(
      ref_titleBtn.value,
      { opacity: [0, 1], y: ["180%", "0%"] },
      {
        duration: 1.5,
        easing: "ease",
        delay: delayBase + 2,
      },
    );
  });

  return (
    <div
      id="home"
      class="flex min-h-screen flex-col justify-evenly px-4 sm:items-center"
    >
      <div class="text-lg md:text-3xl">
        <span class="hi text-center">Hi ! </span>
        <div ref={ref_titleContainer} class="title__container">
          <div class="title__text max-w-sm">I&apos;m Martin Emanuel</div>
        </div>
      </div>
      <div
        ref={ref_titleDescription}
        class="title__description text-3xl
      md:text-4xl"
      >
        <div class="md:text-center">I make</div>
        <div> cool things for the web.</div>
      </div>
      <p ref={ref_titleBrief} class="title__brief text-center">
        Web Design | 3D Graphics | Motion
      </p>
      <div ref={ref_titleBtn} class="title__btn text-center ">
        <a href="#work" class="rounded-lg   px-4 py-2 text-center">
          {/* See my work ! */}
        </a>
      </div>
    </div>
  );
});
