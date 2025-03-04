import { useContext } from "react";
import { UseManageSearchAndPageControl } from "@hooks/positions/useManageSearchAndPageControl";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseBusinessManagersId } from "@hooks/positions/useBusinessManageresId";
import { PaginationConfig } from "@config/positions/tabs";
import { PositionsUI } from "./interface";

const Positions = () => {
  const loading = false;
  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = UseBusinessManagersId(
    appData.businessManager.publicCode
  );

  const {
    filteredData,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
    firstEntryInPage,
    lastEntryInPage,
    paginatedData,
    smallScreen,
    label,
    ShowAction,
    ShowActionTitle,
    searchPosition,
    handleSearchPositions,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    showMenu,
  } = UseManageSearchAndPageControl(
    businessManagersData,
    PaginationConfig.PageRecord
  );

  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      searchPosition={searchPosition}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      loading={loading}
      showMenu={showMenu}
      data={businessManagersData}
      smallScreen={smallScreen}
      label={label}
      ShowAction={ShowAction}
      ShowActionTitle={ShowActionTitle}
      filteredData={filteredData}
      handleStartPage={handleStartPage}
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
      handleEndPage={handleEndPage}
      firstEntryInPage={firstEntryInPage}
      lastEntryInPage={lastEntryInPage}
      paginatedData={paginatedData}
    />
  );
};

export { Positions };
