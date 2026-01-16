import { columnWidthsUsers } from "@config/users/tableUsers/columnWidths";

import { UserTabUI } from "./interface";
import { useSearchAndPageControlUser } from "@hooks/users/tabs/userTab";
import { IEntry } from "@ptypes/design/table/IEntry";

const UsersTab = () => {
  const {
    searchService,
    handleSearchService,
    loading,
    filteredData,
    setEntryDeleted,
    smallScreen,
    direction,
    disabledButton,
    showInfoModal,
    handleToggleInfoModal,
    path,
  } = useSearchAndPageControlUser();
  return (
    <UserTabUI
      handleSearchService={handleSearchService}
      searchService={searchService}
      entries={filteredData as IEntry[]}
      loading={loading}
      columnWidths={columnWidthsUsers}
      setEntryDeleted={setEntryDeleted}
      smallScreen={smallScreen}
      direction={direction}
      disabledButton={disabledButton}
      showInfoModal={showInfoModal}
      handleToggleInfoModal={handleToggleInfoModal}
      path={path}
    />
  );
};
export { UsersTab };
