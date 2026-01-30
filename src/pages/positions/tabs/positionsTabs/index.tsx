import { useManageSearchAndPageControl } from "@hooks/positions/useManageSearchAndPageControl";
import { PositionsTabUI } from "./interface";
import { useStore } from "@src/hooks/positions/usePositionBusinessUnit";

const PositionsTab = () => {
  const loading = false;
  const businessUnitCode = useStore((s) => s.businessUnitCode);
  const {
    smallScreen,
    label,
    searchPosition,
    columnWidths,
    filteredData,
    disabledButton,
    showInfoModal,
    setEntryDeleted,
    handleToggleInfoModal,
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
      disabledButton={disabledButton}
      showInfoModal={showInfoModal}
      handleToggleInfoModal={handleToggleInfoModal}
    />
  );
};

export { PositionsTab };
