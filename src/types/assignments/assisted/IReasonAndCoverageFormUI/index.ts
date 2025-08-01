import { FormikProps } from "formik";
import { IReasonAndCoverageEntry } from "../IReasonAndCoverageEntry";

interface IReasonAndCoverageFormUI {
  formik: FormikProps<IReasonAndCoverageEntry>;
  loading: boolean;
  isMobile: boolean;
  labelButtonPrevious: string;
  labelButtonNext: string;
  isDisabledDateTo: boolean;
  onButtonClick: () => void;
  onPreviousStep?: () => void;
  isDisabledButton?: boolean;
}

export type { IReasonAndCoverageFormUI };
