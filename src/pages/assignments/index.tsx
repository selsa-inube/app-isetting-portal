import { useContext } from "react";

import { AuthAndData } from "@context/authAndDataProvider";
import { useAssignmentsPage } from "@hooks/assignments/useAssignmentsPage";
import { assignmentsTabsConfig } from "@config/assignments/tabs";
import { menuOptionsAssignments } from "@config/assignments/menuOptions";
import { ICardData } from "@ptypes/home/ICardData";
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
    showAbsenceModal,
    setShowAbsenceModal,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    handleTabChange,
  } = useAssignmentsPage({
    businessUnitSigla,
    businessUnits: appData.businessUnit.publicCode,
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
      options={menuOptionsAssignments(setShowAbsenceModal)}
      onToggleInfoModal={onToggleInfoModal}
      onCloseMenu={onCloseMenu}
      onToggleModal={onToggleModal}
      showAbsenceModal={showAbsenceModal}
    />
  );
};

export { Assignments };
