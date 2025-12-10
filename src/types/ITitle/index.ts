import { ITextSize } from "@inubekit/inubekit";

interface ITitle {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  navigatePage?: string;
  sizeTitle?: ITextSize;
  onClick?: () => void;
}
export type { ITitle };
