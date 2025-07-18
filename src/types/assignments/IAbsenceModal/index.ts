import { IOption } from "@inubekit/inubekit";
import { FormikValues } from "formik";

interface IAbsenceModal {
  isMobile: boolean;
  isActiveChecked: boolean;
  absentOfficialOptions: IOption[];
  formik: FormikValues;
  disabled: boolean;
  onSelectChange: (name: string, value: string) => void;
  onSelectCheckChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCloseModal: () => void;
  onClick: () => void;
}

export type { IAbsenceModal };
