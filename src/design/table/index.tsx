import { Stack } from "@inubekit/inubekit";
import { UseTable } from "@hooks/generic/useTable";
import { UseApplicationsInProcess } from "@hooks/positions/useApplicationsInProcess";
import { TableUI } from "./interface";
import { StyledContainerTable } from "./styles";
import { IAction, IBreakpoint, IEntry, ITitle } from "./types";

interface ITable {
  entries: IEntry[];
  id: string;
  isLoading: boolean;
  titles: ITitle[];
  actions: IAction[];
  breakpoints: IBreakpoint[];
  filter?: string;
  infoTitle?: string;
  mobileTitle?: string;
  pageLength?: number;
  widthPercentageTotalColumns?: number;
  columnWidths?: number[];
}

const Table = (props: ITable) => {
  const {
    id,
    titles,
    actions,
    entries,
    filter = "",
    isLoading,
    mobileTitle,
    breakpoints,
    widthPercentageTotalColumns,
    columnWidths,
  } = props;

  const pageLength = UseApplicationsInProcess();
  const {
    mediaActionOpen,
    numberActions,
    TitleColumns,
    lastEntryInPage,
    filteredEntries,
    firstEntryInPage,
    screenTablet,
    getPageEntries,
    goToFirstPage,
    goToEndPage,
    nextPage,
    prevPage,
  } = UseTable(entries, pageLength, titles, breakpoints, actions, filter);

  return (
    <StyledContainerTable
      id={id}
      $pageLength={pageLength}
      $entriesLength={entries.length}
      $isTablet={screenTablet}
    >
      <Stack direction="column">
        <TableUI
          titles={titles}
          actions={actions}
          entries={getPageEntries()}
          isLoading={isLoading}
          mediaActionOpen={mediaActionOpen}
          numberActions={numberActions}
          TitleColumns={TitleColumns}
          mobileTitle={mobileTitle}
          pageLength={pageLength}
          firstEntryInPage={firstEntryInPage}
          lastEntryInPage={lastEntryInPage}
          goToFirstPage={goToFirstPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToEndPage={goToEndPage}
          filteredEntries={filteredEntries}
          widthPercentageTotalColumns={widthPercentageTotalColumns}
          columnWidths={columnWidths}
        />
      </Stack>
    </StyledContainerTable>
  );
};

export { Table };
export type { ITable };
