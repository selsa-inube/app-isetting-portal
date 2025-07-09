import { useState, useEffect } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { enviroment } from "@config/environment";
import { IEntry } from "@ptypes/design/table/IEntry";
import { eventBus } from "@events/eventBus";
import { EModalState } from "@enum/modalState";
import { IUseDetailsAssignments } from "@ptypes/assignments/request/IUseDetailsAssignments";

const UseDetailsAssignments = (props: IUseDetailsAssignments) => {
  const { data } = props;

  const [showModal, setShowModal] = useState(false);
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);

  const normalizeData = {
    ...data,
    reasonForAbsence: `Sí, de ${data.nameOfAbsentStaff}`,
    roles: data.temporaryRolesByBusinessUnit.map((role: IEntry) => ({
      id: role.assignmentId,
      businessUnitName: role.businessUnitCode,
      roleName: role.roleName,
    })),
  };

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  const pageLength = 5;
  const columnWidths = smallScreen ? [35, 35] : [43, 43];

  return {
    showModal,
    smallScreen,
    normalizeData,
    pageLength,
    columnWidths,
    onToggleModal,
  };
};

export { UseDetailsAssignments };
