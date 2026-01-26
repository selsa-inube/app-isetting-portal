import { useManageSearchAndPageControl } from "@hooks/positions/useManageSearchAndPageControl";
import { IPositionTab } from "@ptypes/positions/IPositionTab";
import { PositionsTabUI } from "./interface";

const PositionsTab = (props: IPositionTab) => {
  const {businessUnitCode} = props;
  const loading = false;

  

  const {
    smallScreen,
    label,
    searchPosition,
    columnWidths,
    filteredData,
    setEntryDeleted,
    handleSearchPositions,
  } = useManageSearchAndPageControl(businessUnitCode);

  return (
    <PositionsTabUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={filteredData}
      smallScreen={smallScreen}
      label={label}
      setEntryDeleted={setEntryDeleted}
      columnWidths={columnWidths} 
    />
  );
};

export { PositionsTab };
