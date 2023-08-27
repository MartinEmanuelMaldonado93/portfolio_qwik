import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (
    <div class="border-gray-transparent sticky top-0 z-10 border-b-2 p-4 backdrop-blur-sm sm:flex">
      <span>
        <a class="text-gray-400"  >
          M. E.
        </a>
      </span>
    </div>
  );
});
