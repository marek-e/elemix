import type { ElemixElement } from "./types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // biome-ignore lint/suspicious/noExplicitAny: allow any tag
      [elemName: string]: any;
    }
    interface Element extends ElemixElement {}
    interface ElementClass {}
    interface ElementAttributesProperty {
      props: object;
    }
  }
}
