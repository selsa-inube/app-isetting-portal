import { ILink } from "../ILink";

interface INavSection {
  name: string;
  links: { [key: string]: ILink };
}

export type { INavSection };
