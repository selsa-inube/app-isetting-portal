import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";
import { useBusinessManagersId } from "@hooks/positions/useBusinessManageresId";
import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { mediaQueryTabletMain } from "@config/environment";
import { EUseCaseTypes } from "@src/enum/useCaseTypes";
import { useValidateUseCase } from "@src/hooks/useValidateUseCase";

const useMissionsTab = () => {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");

  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const location = useLocation();
  const label = PrivilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = useBusinessManagersId({
    businessUnitCode: appData.businessManager.publicCode,
  });

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.ADD_USER,
  });

  const handleToggleInfoModal = () => {
    if (disabledButton) {
      setShowInfoModal(!showInfoModal);
    }
  };

  const columnWidths = smallScreen ? [72] : [85];

  return {
    searchPosition,
    smallScreen,
    label,
    businessManagersData,
    entryDeleted,
    columnWidths,
    showInfoModal,
    disabledButton,
    handleToggleInfoModal,
    setEntryDeleted,
    handleSearchPositions,
  };
};

export { useMissionsTab };
