import { IIconAppearance } from "@inubekit/inubekit";
import { FormikValues } from "formik";

interface IDecisionModalUI {
  actionText: string;
  appearance: IIconAppearance;
  comparisonData: boolean;
  description: string;
  formik: FormikValues;
  icon: React.JSX.Element;
  isLoading: boolean;
  justificationOfDecision: boolean;
  portalId: string;
  title: string;
  withIcon: boolean;
  onClick: () => void;
  onCloseModal: () => void;
  isMobile: boolean;
  isMobileTextarea: boolean;
  getFieldState: (
    formik: FormikValues,
    fieldName: string
  ) => "invalid" | "pending" | undefined;
  showCancelButton?: boolean;
  withCancelButton: boolean;
  cancelButton: string;
  subtitle?: string;
  withButton: string;
}

export type { IDecisionModalUI };
