import { FormikProps } from "formik";
import { IContactDataFormValues } from "../../../IContactData";

interface IContactDataFormUI {
  formik: FormikProps<IContactDataFormValues>;
  onNextStep: () => void;
  loading?: boolean;
  componentSize: "column" | "row";
  mobilePadding: string;
  labelButtonNext: string;
  buttonDisabledState: boolean;
  handlePreviousStep: () => void;
}
export type { IContactDataFormUI };
