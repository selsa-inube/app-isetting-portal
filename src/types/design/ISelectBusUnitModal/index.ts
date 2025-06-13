import { IOption } from "@inubekit/inubekit";
import { ISelectBusUnitEntry } from "@ptypes/positions/tabs/ISelectBusUnitEntry";
import { FormikProps } from "formik";

interface ISelectBusUnitModal {
  portalId: string;
  formik: FormikProps<ISelectBusUnitEntry>;
  options: IOption[];
  description: string;
  smallScreen: boolean;
  labelActionButton: string;
  labelCloseButton: string;
  labelCloseModal: string;
  comparisonData: boolean;
  onChange: (name: string, value: string) => void;
  onClick: () => void;
  onCloseModal: () => void;
}

export type { ISelectBusUnitModal };
