import { basic } from "@design/tokens";
import { Stack, useMediaQuery, Input } from "@inubekit/inubekit";
import { Table } from "@design/table";
import {
  actionsConfig,
  breakPoints,
  titles,
} from "@config/positionsTabs/table";
import { IEntrys } from "@design/templates/assignmentForm/types";
import { StyledContainer } from "./styles";

interface IRequestsInProgressTabUI {
  entries: IEntrys[];
  loading: boolean;
  searchrequestProgress: string;
  setEntryDeleted: (value: string | number) => void;
  onSearchrequestProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RequestsInProgressTabUI = (props: IRequestsInProgressTabUI) => {
  const {
    entries,
    searchrequestProgress,
    loading,
    setEntryDeleted,
    onSearchrequestProgress,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 690px)");
  const widthFirstColumn = smallScreen ? 60 : 10;

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
              <Input
                name="searchrequestProgress"
                id="searchrequestProgress"
                placeholder="Palabra clave..."
                type="search"
                size="compact"
                value={searchrequestProgress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onSearchrequestProgress(e)
                }
              />
            </Stack>
          </Stack>

          <Table
            id="portal"
            titles={titles}
            entries={entries}
            actions={actionsConfig(setEntryDeleted)}
            breakpoints={breakPoints}
            filter={searchrequestProgress}
            isLoading={loading}
            columnWidths={[widthFirstColumn, 55, 23]}
          />
        </Stack>
      </Stack>
    </StyledContainer>
  );
};

export { RequestsInProgressTabUI };
