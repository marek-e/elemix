import type { ElemixComponent, ElemixElement } from "./types";

export function createElement(
  type: string | ElemixComponent,
  props: Record<string, unknown> = {},
  ...children: unknown[]
): ElemixElement {
  return { type, props, children };
}
