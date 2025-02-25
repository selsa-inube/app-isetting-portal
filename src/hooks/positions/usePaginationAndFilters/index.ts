import { useMediaQuery } from "@inubekit/inubekit";
import { useLocation } from "react-router-dom";
import {
  PaginationConfig,
  PrivilegeOptionsConfig,
} from "@config/positions/tabs";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { enviroment } from "@config/environment";
import { UseManageSearchAndPageControl } from "../useManageSearchAndPageControl";

const UsePaginationAndFilters = (Data: IBusinessUnitsPortalStaffId[]) => {
  const SmallScreen = useMediaQuery(enviroment.IS_MOBILE_580);
  const Location = useLocation();

  const Label = PrivilegeOptionsConfig.find(
    (Item) => Item.url === Location.pathname
  );

  const {
    filteredData: FilteredData,
    handleStartPage: HandleStartPage,
    handlePrevPage: HandlePrevPage,
    handleNextPage: HandleNextPage,
    handleEndPage: HandleEndPage,
    firstEntryInPage: FirstEntryInPage,
    lastEntryInPage: LastEntryInPage,
    paginatedData: PaginatedData,
  } = UseManageSearchAndPageControl(Data, PaginationConfig.PageRecord);

  return {
    SmallScreen,
    Label,
    FilteredData,
    HandleStartPage,
    HandlePrevPage,
    HandleNextPage,
    HandleEndPage,
    FirstEntryInPage,
    LastEntryInPage,
    PaginatedData,
  };
};

export { UsePaginationAndFilters };
