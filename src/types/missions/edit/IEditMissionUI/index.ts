import { FormikProps } from "formik";
import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
import { ISaveDataResponse } from "@ptypes/requestsInProgress/saveData/ISaveDataResponse";
import { IFormAddMission } from "@ptypes/missions/assisted/IFormAddMission";
import { IEditTabsConfig } from "./IEditTabsConfig";
import { IGeneralInformationEntry } from "@ptypes/missions/assisted/IGeneralInformationEntry";

interface IEditMissionUI {
  editMissionTabsConfig: IEditTabsConfig;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry> | null>;
  initialValues: IFormAddMission;
  isSelected: string;
  requestSteps: IRequestSteps[];
  loading: boolean;
  saveMission: ISaveDataResponse;
  showRequestProcess: boolean;
  showGeneralInfo: boolean;
  showRequestStatus: boolean;
  showEditedModal: boolean;
  showGoBackModal: boolean;
  onToggleEditedModal: () => void;
  onEditedModal: () => void;
  onCloseGoBackModal: () => void;
  onGoBack: () => void;
  onCloseProcess: () => void;
  onTabChange: (id: string) => void;
  onReset: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  smallScreen: boolean;
}

export type { IEditMissionUI };
