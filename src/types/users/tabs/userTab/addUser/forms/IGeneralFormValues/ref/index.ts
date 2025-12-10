import { FormikProps } from "formik";
import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IGeneralInfoForm";
import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";
import { IContactDataFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IContactData";

interface IFormsAddUserGeneralFormRefs {
  generalInformationStep: React.RefObject<FormikProps<IGeneralInfoForm> | null>;
  missionForStaffStep: React.RefObject<FormikProps<IMissionForStaff> | null>;
  contactDataStep: React.RefObject<FormikProps<IContactDataFormValues> | null>;
}

export type { IFormsAddUserGeneralFormRefs };
