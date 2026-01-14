import { ITab } from "@inubekit/inubekit";
import { IMenuOptions } from "@src/types/design/IMenuOptions";

interface IUsersUI {
  isSelected: string;
  smallScreen: boolean;
  title: string;
  handleTabChange: (tabId: string) => void;
  showStaffTab: boolean;
  showRequestsInProgressTab: boolean;
  userTabs: ITab[];
  loading: boolean;
  showModal: boolean;
  showInfoModal: boolean;
  options: IMenuOptions[];
  onToggleInfoModal: () => void;
  onCloseMenu: () => void;
  onToggleModal: () => void;
}

export type { IUsersUI };
