import type { ElemixComponent, ElemixElement } from "./types";

export function createElement(
  type: string | ElemixComponent,
  props: Record<string, unknown> = {},
  ...children: unknown[]
): ElemixElement {
  // Merge children from props (for automatic runtime) and variadic children (for classic)
  const allChildren =
    props && "children" in props ? (props.children as unknown[]) : children;
  return { type, props, children: allChildren };
}
