import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { animate, inView, stagger } from "motion";
import type { CardProps } from "../data/WorkExperience";
import { workExpData } from "../data/WorkExperience";

export const WorkExperience = component$(() => {
  return (
    <div
      id="page-container"
      class="mx-auto flex min-h-screen max-w-5xl flex-col justify-center"
    >
      {workExpData.map((data) => (
        <CardWorkExperience key={Math.random() + data.title} {...data} />
      ))}
    </div>
  );
});

const CardWorkExperience = component$((props: CardProps) => {
  const ulRef = useSignal<HTMLUListElement>();
  useVisibleTask$(
    () => {
      animateItemsInView(ulRef.value!);
      // Todo displacement/effect to photos
    },
  );
  return (
    <div
      class={`${
        props.bg_tw ? props.bg_tw : "bg-black"
      } rounded-sm bg-opacity-50`}
    >
      <div class="mx-auto flex max-w-7xl flex-col-reverse items-center justify-evenly p-4 sm:flex-row-reverse">
        <Image
          class="w-full max-w-sm grow rounded-sm object-cover first-letter:shadow-2xl"
          src={props.img_url}
          alt={props.alt}
          width={200}
          height={250}
          layout="constrained"
        />
        <div class="p-4">
          <div class="my-2 text-4xl font-bold">
            {props.link ? (
              <a
                href={props.link}
                target="_blank"
                class="after: transition-all duration-150"
              >
                {props.title}
              </a>
            ) : (
              props.title
            )}
            <span class="pl-2 text-sm ">{props.location}</span>
          </div>
          <div class="text-gray-400">
            {props.role}
            <span class="pl-2 text-gray-300">{props.date}</span>
          </div>
          <p class="max-w-sm py-5">{props.description}</p>
          <ul ref={ulRef} class="list-container max-w-lg text-gray-200">
            {props.points.map((item) => (
              <li key={Math.random() + item} class="mt-2 list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

function animateItemsInView(ul: HTMLUListElement): void {
  const items = ul.querySelectorAll("li");
  if (!items) throw new Error("li elements not founded");

  items.forEach((li) => (li.style.opacity = "0")); //initial state

  // renders only when reach 25% of container
  inView(
    ul,
    () => {
      animate(
        items,
        {
          y: ["100%", "0%"],
          opacity: [null, 1],
          scale: [0.9, 1],
        },
        { easing: "ease-in-out", delay: stagger(0.1), duration: 0.4 },
      );
    },
    { margin: "-25%" },
  );
}
