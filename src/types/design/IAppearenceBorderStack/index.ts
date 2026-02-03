const appearenceBorderStack = [
  "light",
  "gray",
  "dark",
  "help",
  "warning",
  "danger",
] as const;

type IAppearenceBorderStack = (typeof appearenceBorderStack)[number];

export type { IAppearenceBorderStack };
export { appearenceBorderStack };
