import { basic } from "@design/tokens";
import { Stack, Searchfield } from "@inubekit/inubekit";
import { Table } from "@design/table";
import {
  actionsConfig,
  breakPoints,
  titles,
} from "@config/positionsTabs/table";
import { DecisionModalLabel } from "@config/positions/decisionModalText";
import { IRequestsInProgressTabUI } from "@config/requestsInProgressTab/table/IRequestsInProgressTabUI";
import { StyledContainer } from "./styles";
import { tabLabels } from "@config/tabLabels";

const RequestsInProgressTabUI = (props: IRequestsInProgressTabUI) => {
  const {
    entries,
    searchrequestProgress,
    loading,
    setEntryDeleted,
    onSearchrequestProgress,
    columnWidths,
    smallScreen,
  } = props;

  return (
    <StyledContainer $smallScreen={smallScreen}>
      <Stack
        width="-webkit-fill-available"
        direction="column"
        gap={basic.spacing.s250}
        padding={
          smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s300}`
        }
        justifyContent={smallScreen ? "center" : "normal"}
      >
        <Stack gap={basic.spacing.s400} direction="column">
          <Stack
            justifyContent={smallScreen ? "center" : "start"}
            direction={smallScreen ? "column" : "row"}
            gap={smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s0}`}
          >
            <Stack justifyContent="center">
              <Searchfield
                name="searchrequestProgress"
                id="searchrequestProgress"
                label={smallScreen ? "" :  tabLabels.search}
                placeholder={tabLabels.placeholderSearch}
                size="compact"
                value={searchrequestProgress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onSearchrequestProgress(e)
                }
              />
            </Stack>
          </Stack>

          <Table
            id={DecisionModalLabel.portalId}
            titles={titles}
            tableLayout="auto"
            entries={entries}
            actions={actionsConfig(setEntryDeleted)}
            breakpoints={breakPoints}
            filter={searchrequestProgress}
            loading={loading}
            columnWidths={columnWidths}
          />
        </Stack>
      </Stack>
    </StyledContainer>
  );
};

export { RequestsInProgressTabUI };
