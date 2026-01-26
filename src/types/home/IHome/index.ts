import { IFullscreenNav } from "@inubekit/inubekit";
import { ICardData } from "../ICardData";
interface IHome {
  data: ICardData[];
  collapse: boolean;
  setCollapse: (value: boolean) => void;
  collapseMenuRef: React.RefObject<HTMLDivElement | null>;
  hasData: boolean;
  optionsHeader: {
    nav: IFullscreenNav;
    breakpoint?: string;
  };
  isTablet: boolean;
  smallScreen: boolean;
  username: string;
  multipleBusinessUnits: boolean;
  loading?: boolean;
  padding?: string;
  handlelogout: () => void;
}

export type { IHome };
