import { ISelectCheck } from "../ISelectCheck";

interface ISelectCheckUI extends ISelectCheck {
  displayList: boolean;
  focused?: boolean;
}

export type { ISelectCheckUI };
