import { useLocation } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";
import { useBusinessManagersId } from "@hooks/positions/useBusinessManageresId";
import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { mediaQueryTabletMain } from "@config/environment";
import { useValidateUseCase } from "@hooks/useValidateUseCase";
import { EUseCaseTypes } from "@enum/useCaseTypes";

const useManageSearchAndPageControl = (businessUnitCode: string) => {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.ADD_USER,
  });

  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const location = useLocation();
  const label = PrivilegeOptionsConfig.find(
    (item) => item.url === location.pathname,
  );

  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = useBusinessManagersId({
    businessUnitCode,
    portalPublicCode: appData.businessManager.publicCode,
    token: appData.token,
  });
  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };
  const columnWidths = [75];

  const filteredData = useMemo(() => {
    return businessManagersData
      .filter((row) =>
        Object.values(row).some((value) =>
          value
            ?.toString()
            .toLowerCase()
            .includes(searchPosition.toLowerCase()),
        ),
      )
      .filter((row) => {
        return row.positionId !== entryDeleted;
      });
  }, [businessManagersData, searchPosition, entryDeleted]);

  const handleToggleInfoModal = () => {
    if (disabledButton) {
      setShowInfoModal(!showInfoModal);
    }
  };

  return {
    searchPosition,
    smallScreen,
    label,
    businessManagersData,
    entryDeleted,
    columnWidths,
    disabledButton,
    showInfoModal,
    setEntryDeleted,
    handleSearchPositions,
    handleToggleInfoModal,
    filteredData,
  };
};

export { useManageSearchAndPageControl };
