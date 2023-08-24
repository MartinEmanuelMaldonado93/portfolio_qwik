import {
  QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { RouterHead } from "./components/router-head/router-head";
import "./global.css";

export default component$(() => {
	/** Don't remove the `<head>` and `<body>` elements. */
	return (
		<QwikCityProvider>
			<head>
				<meta charSet='utf-8' />
				<link rel='manifest' href='/manifest.json' />
				<RouterHead />
				<ServiceWorkerRegister />
			</head>
			<body lang='en'>
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
