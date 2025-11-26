import { FormikProps } from "formik";
import { IGeneralInfoForm } from "../../stepData/IGeneralInfoForm/indexs";
import { IMissionForStaff } from "../../stepData/IMissionForStaff";
import { IContactDataFormValues } from "../../IContactData";

interface IFormsAddUserGeneralFormRefs {
  generalInformationStep: React.RefObject<FormikProps<IGeneralInfoForm> | null>;
  missionForStaffStep: React.RefObject<FormikProps<IMissionForStaff> | null>;
  contactDataStep: React.RefObject<FormikProps<IContactDataFormValues> | null>;
}

export type { IFormsAddUserGeneralFormRefs };
