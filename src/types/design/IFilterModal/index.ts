import { IIconAppearance } from "@inubekit/inubekit";
import { IOptionItemChecked } from "@design/select/OptionItem";

interface IFilterModal {
  actionText: string;
  appearance: IIconAppearance;
  isLoading: boolean;
  portalId: string;
  title: string;
  options: IOptionItemChecked[];
  selectedOptions: IOptionItemChecked[];
  onClick: () => void;
  onCloseModal: () => void;
  onSelectChange: (options: IOptionItemChecked[]) => void;
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<IOptionItemChecked[]>
  >;
}

export type { IFilterModal };