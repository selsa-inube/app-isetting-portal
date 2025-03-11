import { IOptionItemChecked } from "@design/select/OptionItem";

interface ILabel {
  id: string;
  titleName: string;
  priority?: number;
  type?: string;
}
interface IFilterFields {
  options: IOptionItemChecked[];
  name?: string;
  actionText: string;
  title: string;
  showModal: boolean;
  selectedOptions: IOptionItemChecked[];
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<IOptionItemChecked[]>
  >;
  handleToggleModal: () => void;
  handleClearFilters: () => void;
  onClick: () => void;
  onSelectChange: (options: IOptionItemChecked[]) => void;
  userData?: { [key: string]: string | number }[];
  id?: string;
}

export type { ILabel, IFilterFields };
