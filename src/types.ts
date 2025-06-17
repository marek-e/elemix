export type ElemixComponent = (props: Record<string, unknown>) => ElemixElement;

export type ElemixElement = {
  type: string | ElemixComponent;
  props: Record<string, unknown>;
  children: unknown[];
};
