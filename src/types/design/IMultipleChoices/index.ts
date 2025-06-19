import { IOptionItemChecked } from "@design/select/OptionItem";


interface IMultipleChoices {
  id: string;
  labelSelect: string;
  labelSelected: string;
  onHandleSelectCheckChange: (options: IOptionItemChecked[]) => void;
  options: IOptionItemChecked[];
  placeholderSelect?: string;
  required?: boolean;
  message?: string;
  onBlur?: () => void;
}

export type { IMultipleChoices };