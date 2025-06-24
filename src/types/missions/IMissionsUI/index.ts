import { ITab } from "@inubekit/inubekit";
import { IMenuOptions } from "@ptypes/design/IMenuOptions";

interface IMissionsUI {
isSelected: string;
  handleTabChange: (id: string) => void;
  smallScreenTab: boolean;
  smallScreen: boolean;
  showModal: boolean;
  showInfoModal: boolean;
  options: IMenuOptions[];
  showMissionTab: boolean;
  missionsTabs: ITab[];
  onToggleInfoModal: () => void;
  onCloseMenu: () => void;
  onToggleModal: () => void;
  catalogName?: string;
}

export type { IMissionsUI };
