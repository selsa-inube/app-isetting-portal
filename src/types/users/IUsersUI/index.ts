import { ITab } from "@inubekit/inubekit";

interface IUsersUI {
  isSelected: string;
  smallScreen: boolean;
  title: string;
  handleTabChange: (tabId: string) => void;
  showStaffTab: boolean;
  showRequestsInProgressTab: boolean;
  userTabs: ITab[];
  loading: boolean;
}

export type { IUsersUI };
