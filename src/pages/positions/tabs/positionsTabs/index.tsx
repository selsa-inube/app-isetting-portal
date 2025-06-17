import { useContext } from "react";
import { UseManageSearchAndPageControl } from "@hooks/positions/useManageSearchAndPageControl";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseBusinessManagersId } from "@hooks/positions/useBusinessManageresId";
import { IPositionTab } from "@ptypes/positions/IPositionTab";
import { PositionsTabUI } from "./interface";

const PositionsTab = (props: IPositionTab) => {
  const {businessUnitCode} = props;
  const loading = false;
  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = UseBusinessManagersId(
    businessUnitCode,
    appData.businessManager.publicCode
  );

  const {
    smallScreen,
    label,
    searchPosition,
    setEntryDeleted,
    handleSearchPositions,
  } = UseManageSearchAndPageControl();

  return (
    <PositionsTabUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={businessManagersData}
      smallScreen={smallScreen}
      label={label}
      setEntryDeleted={setEntryDeleted}
    />
  );
};

export { PositionsTab };
