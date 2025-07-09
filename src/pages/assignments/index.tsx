import { useContext } from "react";

import { ICardData } from "@ptypes/home/ICardData";
import { AuthAndData } from "@context/authAndDataProvider";
import { assignmentsTabsConfig } from "@config/assignments/tabs";
import { menuOptionsAssignments } from "@config/assignments/menuOptions";
import { UseAssignmentsPage } from "@hooks/assignments/useAssignmentsPage";
import { AssignmentsUI } from "./interface";

const Assignments = () => {
  const { businessUnitSigla, appData } = useContext(AuthAndData);
  const {
    isSelected,
    descriptionOptions,
    showAssignmentstTab,
    showRequestsInProgressTab,
    smallScreen,
    assignmentsTabs,
    showModal,
    showInfoModal,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    handleTabChange,
  } = UseAssignmentsPage({
    businessUnitSigla,
    bussinesUnits: appData.businessUnit.publicCode,
  });

  return (
    <AssignmentsUI
      isSelected={
        isSelected ??
        assignmentsTabsConfig(smallScreen).assigments.id
      }
      handleTabChange={handleTabChange}
      descriptionOptions={descriptionOptions as ICardData}
      showAssigmentsTab={showAssignmentstTab}
      showRequestsInProgressTab={showRequestsInProgressTab}
      smallScreen={smallScreen}
      assignmentsTabs={assignmentsTabs}
      showModal={showModal}
      showInfoModal={showInfoModal}
      options={menuOptionsAssignments}
      onToggleInfoModal={onToggleInfoModal}
      onCloseMenu={onCloseMenu}
      onToggleModal={onToggleModal}
    />
  );
};

export { Assignments };
