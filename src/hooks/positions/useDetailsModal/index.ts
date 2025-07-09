import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { eventBus } from "@events/eventBus";
import { EModalState } from "@enum/modalState";

const UseDetailsModal = (data?: IPosition) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const screenTablet = useMediaQuery("(max-width: 1068px)");

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const dataTable = Array.isArray(data?.MissionByRole)
    ? data.MissionByRole.map((item: { roleName: string }) => ({
        Roles: item.roleName,
      }))
    : [];

  const showDetailsMission = Boolean(data && showModal);

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  return {
    showModal,
    handleToggleModal,
    screenTablet,
    dataTable,
    showDetailsMission,
  };
};

export { UseDetailsModal };
