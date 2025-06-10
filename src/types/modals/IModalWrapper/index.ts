import { ComponentAppearance } from "@ptypes/aparences.types";

interface IModalWrapper {
  children: React.ReactNode;
  isMobile: boolean;
  labelActionButton: string;
  labelCloseButton: string;
  labelCloseModal: string;
  portalId: string;
  title: string;
  appearanceButton?: ComponentAppearance;
  iconBeforeButton?: React.ReactElement;
  height?: string;
  width?: string;
  withCancelButton?: boolean;
  onCloseModal?: () => void;
  onClick?: () => void;
}

export type { IModalWrapper };
