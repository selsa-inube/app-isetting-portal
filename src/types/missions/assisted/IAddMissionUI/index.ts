import { FormikProps } from "formik";
import { ISaveDataResponse } from "@ptypes/requestsInProgress/saveData/ISaveDataResponse";
import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
import { IAssistedStep } from "@inubekit/inubekit";
import { IGeneralInformationEntry } from "../IGeneralInformationEntry";
import { IFormAddMission } from "../IFormAddMission";

interface IAddMissionUI {
  currentStep: number;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry> | null>;
  initialGeneralInformationValues: IGeneralInformationEntry;
  isCurrentFormValid: boolean;
  steps: IAssistedStep[];
  onNextStep: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
  onToggleApplicationStatus: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStep: (step: number) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  formValues: IFormAddMission;
  smallScreen: boolean;
  disabled: boolean;
  loading: boolean;
  onFinishForm: () => void;
  showModal: boolean;
  showModalApplicationStatus: boolean;
  saveMission: ISaveDataResponse;
  showRequestProcessModal: boolean;
  showPendingReqModal: boolean;
  navigate: (path: string) => void;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  requestSteps: IRequestSteps[];
  showPendingReqModals: boolean;
}

export type { IAddMissionUI };
