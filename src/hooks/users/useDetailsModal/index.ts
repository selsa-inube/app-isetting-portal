import { useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { IPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";

const UseDetailsModal = (data?: IPosition) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const screenTablet = useMediaQuery("(max-width: 1000px)");

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const dataTable = Array.isArray(data?.staffByBusinessUnitAndRole)
    ? data.staffByBusinessUnitAndRole.map(
        (item: { roleName: string; BusinessUnitName: string }) => ({
          "Unidad de negocio": item.BusinessUnitName,
          roles: item.roleName,
        })
      )
    : [];

  return {
    showModal,
    handleToggleModal,
    screenTablet,
    dataTable,
  };
};

export { UseDetailsModal };
