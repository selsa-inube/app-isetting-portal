import { IAssistedSize, IAssistedStep, IOption } from "@inubekit/inubekit";
import { IFormsAddUserGeneralFormRefs } from "../forms/IGeneralFormValues/ref";
import { IGeneralUserFormValues } from "../forms/IGeneralFormValues";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import React, { Dispatch, SetStateAction } from "react";

interface IAddUserUI {
  showGoBackModal: boolean;
  smallScreen: boolean;
  showMissionNameModal: boolean;
  title: string;
  description?: string;
  handleModal: () => void;
  steps: IAssistedStep[];
  currentStep: number;
  isCurrentFormValid: boolean;
  onNextStep: () => void;
  onPreviousStep: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  formReferences: IFormsAddUserGeneralFormRefs;
  initialValues: IGeneralUserFormValues;
  onGoBack: () => void;
  assistedLength: IAssistedSize;
  onToggleModal: () => void;
  onToggleMissionModal: () => void;
  setEntriesAdditionalSaasService: Dispatch<SetStateAction<IFormEntry[]>>;
  entriesAdditionalSaasService: IFormEntry[];
}
export type { IAddUserUI };
