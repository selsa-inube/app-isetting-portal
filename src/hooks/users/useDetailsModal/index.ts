import { useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { IUseDetailsModal } from "@ptypes/hooks/IUseDetailsModal";

const useDetailsModal = (props: IUseDetailsModal) => {
  const { data } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const screenTablet = useMediaQuery("(max-width: 1200px)");

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const positionsByBusinessUnitRoles = Array.isArray(
    data?.staffByBusinessUnitAndRole,
  )
    ? data.staffByBusinessUnitAndRole
        .map(
          (
            item: { positionName: string; businessUnitName: string },
            index,
          ) => ({
            id: String(index),
            "Unidad de negocio": item.businessUnitName,
            Rol: item.positionName,
          }),
        )
        .filter(
          (item, index, self) =>
            index ===
            self.findIndex(
              (t) =>
                t["Unidad de negocio"] === item["Unidad de negocio"] &&
                t.Rol === item.Rol,
            ),
        )
    : [];

  const rolesByBusinessUnit = Array.isArray(data?.staffByBusinessUnitAndRole)
    ? data.staffByBusinessUnitAndRole.map(
        (item: { roleName: string; businessUnitName: string }, index) => ({
          id: String(index),
          "Unidad de negocio": item.businessUnitName,
          Cargo: item.roleName,
        }),
      )
    : [];
  return {
    showModal,
    handleToggleModal,
    screenTablet,
    positionsByBusinessUnitRoles,
    rolesByBusinessUnit,
  };
};

export { useDetailsModal };
