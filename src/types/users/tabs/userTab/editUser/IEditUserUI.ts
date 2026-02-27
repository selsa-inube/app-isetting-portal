import { ITab } from "@inubekit/inubekit";
import { IGeneralUserFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
import { IFormsAddUserGeneralFormRefs } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues/ref";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { PositionsByBusinessUnitMap } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/IPositionByBusinessUnit";

interface IEditUserUI {
  editUserTabsConfig: Record<string, ITab>;
  isSelected: string;
  onTabChange: (tabId: string) => void;
  formReferences: IFormsAddUserGeneralFormRefs;
  initialValues: IGeneralUserFormValues;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  saveUsers: ISaveDataResponse;
  requestSteps: IRequestSteps[];
  loading: boolean;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  onReset: () => void;
  smallScreen: boolean;
  showRequestProcess: boolean;
  showGeneralInfo: boolean;
  showMissionForStaff: boolean;
  showContactData: boolean;
  showBusinessUnits: boolean;
  showPositionByBusinessUnit: boolean;
  showRoleByBusinessUnit: boolean;
  showRequestStatus: boolean;
  showEditedModal: boolean;
  showGoBackModal: boolean;
  onToggleEditedModal: () => void;
  onEditedModal: () => void;
  onCloseGoBackModal: () => void;
  onGoBack: () => void;
  onCloseProcess: () => void;
  setSelectedToggle: React.Dispatch<React.SetStateAction<IFormEntry[]>>;
  entriesAdditionalBusinessEntity: IFormEntry[];
  positionsByBusinessUnit: PositionsByBusinessUnitMap;
  selectPositionsByBusinessUnit: (name: string, value: string) => void;
  rolesByBusinessUnit: IFormEntry[];
  selectRolesByBusinessUnit: React.Dispatch<React.SetStateAction<IFormEntry[]>>;
  onNextStep: () => void;
}

export type { IEditUserUI };
