import { FormikProps } from "formik";
import { IAddAssignmentForms } from "@ptypes/assignments/assisted/IAddAssignmentForms";
import { IOfficialInChargeEntry } from "@ptypes/assignments/assisted/IOfficialInChargeEntry";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";

interface IUseAssignmentNavigation {
  currentStep: number;
  hasError: boolean;
  businessUnitsOptions: IBusinessEntry[];
  initialValues: IAddAssignmentForms;
  formValues: IAddAssignmentForms;
  showModal: boolean;
  officialInChargeRef: React.RefObject<FormikProps<IOfficialInChargeEntry>>;
  selectedToggle: IBusinessEntry[];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { IUseAssignmentNavigation };
