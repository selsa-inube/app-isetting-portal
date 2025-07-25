import { IOptionItemChecked } from "@design/select/OptionItem";

interface IUseMultipleChoices {
  initialOptions: IOptionItemChecked[];
  onHandleSelectCheckChange: (options: IOptionItemChecked[]) => void;
}

export type { IUseMultipleChoices };
