import { FormikProps } from "formik";
import { IGeneralInfoForm } from "../../stepData/IGeneralInfoForm/indexs";
import { IMissionForStaff } from "../../stepData/IMissionForStaff";

interface IFormsAddUserGeneralFormRefs {
  generalInformation: React.RefObject<FormikProps<IGeneralInfoForm>>;
  missionForStaff: React.RefObject<FormikProps<IMissionForStaff>>;
}

export type { IFormsAddUserGeneralFormRefs };
