import { FormikProps } from "formik";

import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";
import { IOption } from "@inubekit/inubekit";

interface IMissionForStaffFormUI {
  formik: FormikProps<IMissionForStaff>;
  onNextStep: () => void;
  loading?: boolean;
  mobilePadding: string;
  buttonDisabledState: boolean;
  handleSelectChange: (name: string, value: string) => void;
  optionMission: IOption[];
  missionSelected: string;
  showForm: boolean;
  handlePreviousStep: () => void;
}
export type { IMissionForStaffFormUI };
