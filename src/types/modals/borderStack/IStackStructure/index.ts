const structureProperties = ["div", "ul", "ol"] as const;

type IStackStructure = (typeof structureProperties)[number];

export type { IStackStructure };
