import { INavSection } from "../INavSection";

interface INav {
  title: string;
  sections: { [key: string]: INavSection };
}

export type { INav };
