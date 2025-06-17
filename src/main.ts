import { createElement, render } from "./index";
import "./style.css";

function App() {
	const subtitle = createElement(
		"h2",
		{
			className: "subtitle",
		},
		"Hello there",
	);
	return createElement(
		"div",
		{ style: "display: flex; flex-direction: column; align-items: center;" },
		createElement("h1", {}, "Elemix"),
		subtitle,
	);
}

const app = document.getElementById("app");
if (app) {
	render(createElement(App), app);
}
