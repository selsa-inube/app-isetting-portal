const alignItemsProperties = [
  "baseline",
  "normal",
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "self-start",
  "self-end",
  "initial",
  "revert",
  "unset",
  "start",
  "end",
] as const;
type IStackAlignItem = (typeof alignItemsProperties)[number];

export type { IStackAlignItem };
