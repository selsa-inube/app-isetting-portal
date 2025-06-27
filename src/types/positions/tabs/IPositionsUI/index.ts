import { FormikProps } from "formik";
import { IOption, ITab } from "@inubekit/inubekit";
import { IMenuOptions } from "@ptypes/design/IMenuOptions";
import { ISelectBusUnitEntry } from "@ptypes/positions/tabs/ISelectBusUnitEntry";

interface IPositionsUI {
  isSelected: string;
  handleTabChange: (id: string) => void;
  smallScreenTab: boolean;
  smallScreen: boolean;
  showModal: boolean;
  showInfoModal: boolean;
  options: IMenuOptions[];
  selectedUnit: string;
  businessUnitSigla: string;
  comparisonData: boolean;
  positionTab:  ITab[];
  showPositionsTab: boolean;
  showReqInProgTab: boolean;
  onToggleInfoModal: () => void;
  onCloseMenu: () => void;
  onToggleModal: () => void;
  onChange: (name: string, value: string) => void;
  showModalUnits: boolean;
  formik: FormikProps<ISelectBusUnitEntry>;
  optionsUnits: IOption[];
  onClickUnits: () => void;
  onCloseModalUnits: () => void;
  catalogName?: string;
}

export type { IPositionsUI };
