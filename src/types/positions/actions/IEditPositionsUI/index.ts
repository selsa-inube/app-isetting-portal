import { FormikProps } from "formik";
import { IEditPositionsTabsConfig } from "@ptypes/positions/tabs/IEditDestinationTabsConfig";
import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";
import { IFormAddPosition } from "@ptypes/positions/assisted/IFormAddPosition";
import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
import { IOptionInitialiceEntry } from "@ptypes/positions/assisted/IOptionInitialiceEntry";
import { IOptionInitialiceEntryApp } from "@ptypes/positions/assisted/IOptionInitialiceEntryApp";
import { ISaveDataResponse } from "@ptypes/requestsInProgress/saveData/ISaveDataResponse";

interface IEditPositionsUI {
  editPositionTabsConfig: IEditPositionsTabsConfig;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialValues: IFormAddPosition;
  isSelected: string;
  requestSteps: IRequestSteps[];
  loading: boolean;
  savePositions: ISaveDataResponse;
  showGeneralInformation: boolean;
  showRolesform: boolean;
  showRequestProcess: boolean;
  showRequestStatusModal: boolean;
  onTabChange: (id: string) => void;
  onButtonClick: () => void;
  onReset: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  smallScreen: boolean;
  options: IOptionInitialiceEntry[];
  setSelectedToggle: React.Dispatch<
    React.SetStateAction<IFormEntry[] | undefined>
  >;
  roles: IOptionInitialiceEntryApp[];
}

export type { IEditPositionsUI };
