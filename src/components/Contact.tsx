import { component$ } from "@builder.io/qwik";
import { BsGithub, BsLinkedin, BsTwitter } from "@qwikest/icons/bootstrap";

export const Contact = component$(() => {
  return (
    <div id="contact" class="flex min-h-[80vh] flex-col justify-center">
      <div class="border-gray-transparent mx-auto flex h-full w-full max-w-md flex-col justify-between gap-6 rounded-md border border-t-4 p-2">
        <div class="text-center text-lg text-secondary">Next...</div>
        <div class="text-center text-3xl font-bold">Get In Touch</div>
        <p class="p-2">
          Right now I&apos;m working on my personal projects to keep growing. If
          you have any question, new proposal, or just want to say: Hi 👋
          I&apos;ll be <strong>here.</strong>
        </p>
        <div class="text-center text-secondary">Hit those buttons!</div>
        <div class="mx-auto flex gap-8 p-4 text-3xl">
          <a
            href="https://www.linkedin.com/in/martin-emanuel-maldonado93/"
            target="_blank"
            class="transition-transform ease-out hover:scale-125"
          >
            <BsLinkedin title="linkedin" />
          </a>
          <a
            href="https://twitter.com/martinEmanuel93"
            target="_blank"
            class="transition-transform ease-out  hover:scale-125"
          >
            <BsTwitter title="twiter" />
          </a>
          <a
            href="https://github.com/MartinEmanuelMaldonado93"
            target="_blank"
            class="transition-transform ease-out  hover:scale-125"
          >
            <BsGithub title="github" />
          </a>
        </div>
      </div>
    </div>
  );
});
