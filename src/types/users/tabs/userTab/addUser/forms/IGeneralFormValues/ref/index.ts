import { FormikProps } from "formik";
import { IGeneralInfoForm } from "../../IGeneralInfoForm/indexs";

interface IFormsAddUserGeneralFormRefs {
  generalInformation: React.RefObject<FormikProps<IGeneralInfoForm>>;
}

export type { IFormsAddUserGeneralFormRefs };
