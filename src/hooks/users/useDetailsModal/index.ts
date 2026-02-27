import { useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { IUseDetailsModal } from "@ptypes/hooks/IUseDetailsModal";
import { mediaQueryTabletMain } from "@config/environment";

const useDetailsModal = (props: IUseDetailsModal) => {
  const { data } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const screenTablet = useMediaQuery(mediaQueryTabletMain);
  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const positionsByBusinessUnitRoles = Array.isArray(data?.businessUnitsAsigned)
    ? data.businessUnitsAsigned
        .map((item, index) => ({
          id: String(index),
          "Unidad de negocio": item.businessUnitName,
          Posición: item.positionName,
        }))
        .filter(
          (item, index, self) =>
            index ===
            self.findIndex(
              (other) =>
                other["Unidad de negocio"] === item["Unidad de negocio"] &&
                other.Posición === item.Posición,
            ),
        )
    : [];

  const rolesByBusinessUnit = Array.isArray(data?.businessUnitsAsigned)
    ? data.businessUnitsAsigned
        .flatMap((item) =>
          item.roles.map((role: { roleName: string }) => ({
            "Unidad de negocio": item.businessUnitName,
            Rol: role.roleName,
          })),
        )
        .filter(
          (item, index, self) =>
            index ===
            self.findIndex(
              (other) =>
                other["Unidad de negocio"] === item["Unidad de negocio"] &&
                other.Rol === item.Rol,
            ),
        )
        .map((item, index) => ({
          id: String(index),
          ...item,
        }))
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
