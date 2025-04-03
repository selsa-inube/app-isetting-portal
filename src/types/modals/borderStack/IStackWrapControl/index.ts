const wrapControls = [
  "wrap",
  "nowrap",
  "wrap-reverse",
  "inherit",
  "initial",
  "revert",
  "unset",
] as const;

type IStackWrapControl = (typeof wrapControls)[number];

export type { IStackWrapControl };
