import { ITab } from "@inubekit/inubekit";
import { ICardData } from "@ptypes/home/ICardData";
import { IMenuOptions } from "@ptypes/design/IMenuOptions";

interface IAssignmentsUI {
  isSelected: string;
  descriptionOptions: ICardData;
  showAssigmentsTab: boolean;
  showRequestsInProgressTab: boolean;
  smallScreen: boolean;
  assignmentsTabs: ITab[];
  showModal: boolean;
  showInfoModal: boolean;
  options: IMenuOptions[];
  onToggleInfoModal: () => void;
  onCloseMenu: () => void;
  onToggleModal: () => void;
  handleTabChange: (id: string) => void;
}

export type { IAssignmentsUI };
