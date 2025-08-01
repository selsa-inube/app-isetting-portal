import { FormikProps } from "formik";
import { IReasonAndCoverageEntry } from "../IReasonAndCoverageEntry";

interface IUseReasonAndCoverageForm {
  initialValues: IReasonAndCoverageEntry;
  ref: React.ForwardedRef<FormikProps<IReasonAndCoverageEntry>>;
  editDataOption: boolean;
  loading: boolean | undefined;
  onSubmit: ((values: IReasonAndCoverageEntry) => void) | undefined;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  initialData?: IReasonAndCoverageEntry;
}

export type { IUseReasonAndCoverageForm };
