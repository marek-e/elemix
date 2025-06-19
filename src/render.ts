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
    if (key === "className" && typeof value === "string") {
      dom.setAttribute("class", value);
    } else if (key.startsWith("on") && typeof value === "function") {
      // Attach event handler (e.g., onClick -> click)
      dom.addEventListener(key.slice(2).toLowerCase(), value as EventListener);
    } else if (typeof value === "string") {
      dom.setAttribute(key, value);
    }
    // Ignore all other prop types
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
