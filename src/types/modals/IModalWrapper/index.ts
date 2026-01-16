import { EComponentAppearance } from "@src/enum/appearances";

interface IModalWrapper {
  children: React.ReactNode;
  isMobile: boolean;
  labelActionButton: string;
  labelCloseButton: string;
  labelCloseModal: string;
  portalId: string;
  title: string;
  appearanceButton?: EComponentAppearance;
  iconBeforeButton?: React.ReactElement;
  height?: string;
  loading?: boolean;
  width?: string;
  withCancelButton?: boolean;
  minHeight?: string;
  maxHeight?: string;
  padding?: string;
  overflowY?: string;
  disabled?: boolean;
  onCloseModal?: () => void;
  onClick?: () => void;
  changeZIndex?: boolean;
}

export type { IModalWrapper };
