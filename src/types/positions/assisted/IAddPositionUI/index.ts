import { FormikProps } from "formik";
import { ISaveDataResponse } from "@ptypes/requestsInProgress/saveData/ISaveDataResponse";
import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
import { IAssistedStep } from "@inubekit/inubekit";
import { IFormAddPosition } from "../IFormAddPosition";
import { IOptionInitialiceEntry } from "../IOptionInitialiceEntry";
import { IOptionInitialiceEntryApp } from "../IOptionInitialiceEntryApp";
import { IGeneralInformationEntry } from "../IGeneralInformationEntry";
interface IAddPositionUI {
  currentStep: number;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialValues: IFormAddPosition;
  isCurrentFormValid: boolean;
  steps: IAssistedStep[];
  onNextStep: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
  onToggleApplicationStatus: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  selectedToggle: IFormEntry[];
  setCurrentStep: (step: number) => void;
  setSelectedToggle: React.Dispatch<
    React.SetStateAction<IFormEntry[] | undefined>
  >;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  formValues: IFormAddPosition;
  smallScreen: boolean;
  disabled: boolean;
  roles: IOptionInitialiceEntryApp[];
  onFinishForm: () => void;
  onFinishFormApplicationStatus: () => void;
  showModal: boolean;
  showModalApplicationStatus: boolean;
  savePositions: ISaveDataResponse;
  showRequestProcessModal: boolean;
  showPendingReqModal: boolean;
  loading: boolean;
  navigate: (path: string) => void;
  onCloseRequestStatus: () => void;
  showMultipurposeModal: boolean;
  setShowMultipurposeModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClosePendingReqModal: () => void;
  options: IOptionInitialiceEntry[];
  requestSteps: IRequestSteps[];
  shouldShowRequestProcessModal: ISaveDataResponse;
  showPendingReqModals: boolean;
}

export type { IAddPositionUI };
