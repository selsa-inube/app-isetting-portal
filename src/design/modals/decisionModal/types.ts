import { IIconAppearance } from "@inubekit/inubekit";

interface IDecisionEntry {
  justification: string;
}

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
  withCancelButton?: boolean;
}

export type { IDecisionEntry, IDecisionModal };
