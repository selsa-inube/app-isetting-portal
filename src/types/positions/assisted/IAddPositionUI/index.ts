import { FormikProps } from "formik";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IFormAddPosition } from "../IFormAddPosition";
import { IOptionInitialiceEntry } from "../IOptionInitialiceEntry";
import { IOptionInitialiceEntryApp } from "../IOptionInitialiceEntryApp";
import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IRequestSteps } from "@design/feedback/requestProcess/types";
import { IAssistedStep } from "@inubekit/inubekit";
import { IGeneralInformationEntry } from "../IGeneralInformationEntry";

interface IAddPositionUI {
  currentStep: number;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialGeneralInformationValues: IGeneralInformationEntry;
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
  loading: boolean;
  navigate: (path: string) => void;
  onCloseRequestStatus: () => void;
  showMultipurposeModal: boolean;
  setShowMultipurposeModal: React.Dispatch<React.SetStateAction<boolean>>;
  options: IOptionInitialiceEntry[];
  requestSteps: IRequestSteps[];
}

export type { IAddPositionUI };
