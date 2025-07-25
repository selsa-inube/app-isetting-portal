import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useManageSearchAndPageControl } from "@hooks/positions/useManageSearchAndPageControl";
import { useBusinessManagersId } from "@hooks/positions/useBusinessManageresId";
import { IPositionTab } from "@ptypes/positions/IPositionTab";
import { PositionsTabUI } from "./interface";

const PositionsTab = (props: IPositionTab) => {
  const {businessUnitCode} = props;
  const loading = false;
  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = useBusinessManagersId({
    businessUnitCode,
    portalPublicCode: appData.businessManager.publicCode
  });

  const {
    smallScreen,
    label,
    searchPosition,
    columnWidths,
    setEntryDeleted,
    handleSearchPositions,
  } = useManageSearchAndPageControl();

  return (
    <PositionsTabUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={businessManagersData}
      smallScreen={smallScreen}
      label={label}
      setEntryDeleted={setEntryDeleted}
      columnWidths={columnWidths} 
    />
  );
};

export { PositionsTab };
