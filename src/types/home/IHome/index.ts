import { ICardData } from "../ICardData";
interface IHome {
  data: ICardData[];
  collapse: boolean;
  setCollapse: (value: boolean) => void;
  collapseMenuRef: React.RefObject<HTMLDivElement | null>;
  hasData: boolean;
  isTablet: boolean;
  smallScreen: boolean;
  username: string;
  multipleBusinessUnits: boolean;
  loading?: boolean;
  handlelogout: () => void;
}

export type { IHome };
