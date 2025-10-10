import { IIconAppearance } from "@inubekit/inubekit";

interface IDecisionModal {
  actionText: string;
  description: string;
  portalId: string;
  title: string;
  onClick: () => void;
  onCloseModal: () => void;
  setFieldEntered?: (value: string) => void;
  appearance?: IIconAppearance;
  icon?: React.JSX.Element;
  isLoading?: boolean;
  justificationOfDecision?: boolean;
  showCancelButton?: boolean;
  withIcon?: boolean;
  withDivider?: boolean;
  withCancelButton?: boolean;
  subtitle?: string;
}

export type { IDecisionModal };
