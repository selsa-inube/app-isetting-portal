const directionAlignments = [
  "row",
  "column",
  "row-reverse",
  "column-reverse",
  "inherit",
  "initial",
  "revert",
  "unset",
] as const;
type IStackDirectionAlignment = (typeof directionAlignments)[number];

export type { IStackDirectionAlignment };
