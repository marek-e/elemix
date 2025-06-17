import type { ElemixElement } from "./types";

export function render(element: ElemixElement, container: HTMLElement) {
  if (typeof element.type === "function") {
    // Function component
    return render(
      element.type({ ...element.props, children: element.children }),
      container
    );
  }

  const dom = document.createElement(element.type as string);

  for (const [key, value] of Object.entries(element.props || {})) {
    if (typeof value !== "string") {
      continue;
    }

    console.log("🚀 ~ render ~ key:", key);
    console.log("🚀 ~ render ~ value:", value);

    if (key === "className") {
      dom.setAttribute("class", value);
    } else if (key.startsWith("on") && typeof value === "function") {
      dom.addEventListener(key.toLowerCase().slice(2), value);
    } else {
      dom.setAttribute(key, value);
    }
  }

  const children = Array.isArray(element.children)
    ? element.children
    : element.children != null
    ? [element.children]
    : [];

  for (const child of children) {
    if (typeof child === "object" && child !== null) {
      render(child as ElemixElement, dom);
    } else {
      dom.appendChild(document.createTextNode(child as string));
    }
  }

  container.appendChild(dom);
}
