import { Size, Status } from "@ptypes/select/selectbusinessUnit/Istatus";
import { IOptionItemChecked } from "../IOptionItemChecked";

interface ISelectCheck {
  id: string;
  name: string;
  options: IOptionItemChecked[];
  value: string | number;
  disabled?: boolean;
  fullwidth?: boolean;
  label?: string;
  message?: string;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  onChangeCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent) => void;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: Size;
  status?: Status;
}

export type { ISelectCheck };
