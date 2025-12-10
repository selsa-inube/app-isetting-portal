import { FormikProps } from "formik";
import { IOption } from "@inubekit/inubekit";
import { IOfficialInChargeEntry } from "../IOfficialInChargeEntry";

interface IOfficialInChargeFormUI {
  formik: FormikProps<IOfficialInChargeEntry>;
  loading: boolean;
  editDataOption: boolean;
  isMobile: boolean;
  officialInChargeOptions: IOption[];
  labelButtonPrevious: string;
  labelButtonNext: string;
  onChangeSelect: (name: string, value: string) => void;
  onButtonClick: () => void;
  onPreviousStep?: () => void;
  isDisabledButton?: boolean;
}

export type { IOfficialInChargeFormUI };
