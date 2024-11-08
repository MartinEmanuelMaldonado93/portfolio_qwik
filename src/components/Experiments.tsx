import {
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { GoArrowUpRight16, GoLogoGithub16, } from "@qwikest/icons/octicons";

import { animate, stagger } from "motion";
import Splitting from "splitting";
import type { ExperimentsType } from "../data/ExperimentsData";
import { experiments_data } from "../data/ExperimentsData";
import style from "./Experiments.css?inline";
import { BsGithub } from "@qwikest/icons/bootstrap";

export const Experiments = component$(() => {
  const title = useSignal<HTMLDivElement>(null!);
  useStyles$(style);

  useVisibleTask$(() => {
    titleFadeIn(title.value);
  });
  return (
    <div class="mt-20 mx-auto mb-16 flex min-h-screen max-w-5xl flex-col items-center px-4">
      <div
        ref={title}
        id="big title"
        class="slide-vertical mx-auto text-center font-grotesk text-4xl"
      >
        3D Graphics - Motion - Creative code
      </div>
      <div class="max-w-2xl p-4 text-center font-grotesk">
        A web-based collection of projects to produce cutting-edge visual
        effects and make innovative websites.
      </div>
      {experiments_data.map((item, index) => (
        <Card key={Math.random() + item.title} {...item} index={index} />
      ))}
    </div>
  );
});

const Card = component$((props: ExperimentsType) => {
  const card = useSignal<HTMLDivElement>(null!);
  useVisibleTask$(() => {
    animate(
      card.value,
      {
        opacity: [0, 1],
        y: ["30%", "0"],
      },
      {
        delay: 0.1 * props.index!,
        easing: "ease-in",
        duration: 0.3,
      },
    );
  });
  return (
    <div ref={card} class="card my-2 w-full max-w-2xl">
      <div class="rounded-md border border-gray-transparent bg-black-transparent px-2 py-2 -backdrop-hue-rotate-15  transition-all duration-300 hover:border-secondary hover:shadow-xl">
        <div class="flex  items-center justify-between">
          <div class="w-full ">
            <div class="text-2xl flex gap-4 cursor-pointer capitalize w-full">
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                class=" w-full flex justify-between"
              >
                {props.title}{" "}
                <div class="flex gap-6">
                  <GoArrowUpRight16 class="inline rotate-12 hover:scale-125 hover:-rotate-12 transition-transform duration-300 lowercase text-gray-400" />
                </div>
              </a>
              {
                props.gh_link &&
                <a href={props.gh_link} target="_blank" rel="noopener noreferrer">
                  <BsGithub class="hover:scale-110 transition-transform duration-500" />
                </a>
              }
            </div>
            <div class="text-md text-gray-500">{props.brief}</div>
            <div class="flex gap-2 ">
              {props.stack.map((item) => (
                <span
                  key={Math.random()}
                  class="md:text-md overflow-hidden text-ellipsis break-normal rounded-sm px-1 text-xs  capitalize text-gray-200 opacity-70 sm:text-sm "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          {props.img_url && (
            <img
              class="max-w-sm rounded-md object-scale-down shadow-2xl"
              src={props.img_url}
              alt={props.alt}
              width={"150"}
              height={"150"}
            />
          )}
        </div>
      </div>
    </div>
  );
});

function titleFadeIn(el: HTMLDivElement) {
  Splitting({ target: el });
  const chars = el.querySelectorAll(".char")!;

  animate(
    chars,
    {
      opacity: [0, 1],
      // x: ['-40%', '0%']
    },
    {
      easing: "ease-in",
      delay: stagger(0.02, { start: 0.2 }),
      duration: 0.5,
    },
  );
}
