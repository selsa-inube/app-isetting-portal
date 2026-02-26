import { useLocation } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";
import { useBusinessManagersId } from "@hooks/positions/useBusinessManageresId";
import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { mediaQueryTabletMain } from "@config/environment";
import { EUseCaseTypes } from "@enum/useCaseTypes";
import { useValidateUseCase } from "@hooks/useValidateUseCase";
import { IMisionData } from "@ptypes/missions/IMisionData";

const useMissionsTab = (missionData: IMisionData[]) => {
  const [searchMission, setSearchMission] = useState<string>("");
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");

  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const location = useLocation();
  const label = PrivilegeOptionsConfig.find(
    (item) => item.url === location.pathname,
  );

  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = useBusinessManagersId({
    businessUnitCode: appData.businessManager.publicCode,
    token: appData.token,
  });

  const handleSearchMissions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMission(e.target.value);
  };

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const { disabledButton } = useValidateUseCase({
    useCase: EUseCaseTypes.ADD_MISSION,
  });

  const handleToggleInfoModal = () => {
    if (disabledButton) {
      setShowInfoModal(!showInfoModal);
    }
  };

  const columnWidths = smallScreen ? [72] : [85];

  const filteredData = useMemo(() => {
    return missionData
      .filter((row) =>
        Object.values(row).some((value) =>
          value?.toString().toLowerCase().includes(searchMission.toLowerCase()),
        ),
      )
      .filter((row) => {
        return row.missionId !== entryDeleted;
      });
  }, [missionData, searchMission, entryDeleted]);

  return {
    searchMission,
    smallScreen,
    label,
    businessManagersData,
    entryDeleted,
    columnWidths,
    showInfoModal,
    disabledButton,
    filteredData,
    handleToggleInfoModal,
    setEntryDeleted,
    handleSearchMissions,
  };
};

export { useMissionsTab };
