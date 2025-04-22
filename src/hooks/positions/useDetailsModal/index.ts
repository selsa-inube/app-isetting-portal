import { useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { IPosition } from "@ptypes/positions/assisted/IPosition";

const UseDetailsModal = (data?: IPosition) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const screenTablet = useMediaQuery("(max-width: 1068px)");

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const dataTable = Array.isArray(data?.missionByRole)
    ? data.missionByRole.map((item: { roleName: string }) => ({
        roleName: item.roleName,
      }))
    : [];

  return {
    showModal,
    handleToggleModal,
    screenTablet,
    dataTable,
  };
};

export { UseDetailsModal };
