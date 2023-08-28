import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate } from "motion";
import { ExperimentsType, experiments_data } from "../data/ExperimentsData";

export const Experiments = component$(() => {
  return (
    <div class="mx-auto mb-32 mt-60 flex min-h-screen max-w-5xl flex-col items-center px-4">
      <div id="big title" class="font-grotesk mx-auto text-center text-4xl">
        3D Graphics - Motion - Creative code
      </div>
      <div class="font-grotesk max-w-2xl p-4 text-center">
        A web-based collection of projects to produce cutting-edge visual
        effects and make innovative websites.
      </div>
      {experiments_data.map((item, index) => (
        <Card key={Math.random()} {...item} index={index} />
      ))}
    </div>
  );
});

const Card = component$((props: ExperimentsType) => {
  const el = useSignal<HTMLDivElement>(null!);
  useVisibleTask$(() => {
    animate(
      el.value,
      {
        opacity: [0, 1],
        y: ["30%", "0"],
      },
      {
        delay: 0.3 * props.index!,
        easing: "ease-out",
        duration: 0.5,
      },
    );
  });
  return (
    <div ref={el} class="card my-2 w-full max-w-2xl">
      <div class="border-gray-transparent bg-black-transparent rounded-md border px-2 py-2 -backdrop-hue-rotate-15  transition-all duration-300 hover:border-secondary hover:shadow-xl">
        <div class="flex  items-center justify-between">
          <div>
            <div class="text-2xl capitalize">
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                class="cursor-pointer"
              >
                {props.title}
              </a>
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
