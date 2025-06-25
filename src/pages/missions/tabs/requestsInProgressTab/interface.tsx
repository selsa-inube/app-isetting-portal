import { inube, Searchfield, Stack, Text } from "@inubekit/inubekit";

import { Table } from "@design/table";
import { BorderStack } from "@design/modals/borderStack";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { tabLabels } from "@config/tabLabels";
import { titles } from "@config/missions/requestTab/table/titles";
import { breakPoints } from "@config/missions/missionTab/table/breakPoints";
import { IRequestsInProgressTabUI } from "@ptypes/requestsInProgress/IRequestsInProgressTabUI";
import { actionsConfig } from "@config/missions/requestTab/table/actionsConfig";
import { detailsLabels } from "@config/missions/missionTab/detailsLabels";

const RequestsInProgressTabUI = (props: IRequestsInProgressTabUI) => {
  const {
    entries,
    searchrequestProgress,
    loading,
    smallScreen,
    columnWidths,
    pageLength,
    setEntryCanceled,
    onSearchrequestProgress,
  } = props;

  return (
    <BorderStack
      boxSizing="initial"
      border={ inube.palette.neutral.N40
      }
      borderRadius={basic.spacing.s100}
      padding={smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s0}`}
    >
      <Stack
        width="-webkit-fill-available"
        direction="column"
        gap={basic.spacing.s250}
        padding={
          smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s300}`
        }
        justifyContent={smallScreen ? "center" : "normal"}
      >
        <Stack
          gap={smallScreen ? basic.spacing.s150 : basic.spacing.s400}
          direction="column"
          width="100%"
        >
          {smallScreen && (
            <Stack>
              <Text
                type="title"
                size="medium"
                appearance={ComponentAppearance.DARK}
                ellipsis
              >
                {tabLabels.description}
              </Text>
            </Stack>
          )}
          <Stack
            justifyContent={smallScreen ? "center" : "start"}
            direction={smallScreen ? "column" : "row"}
            gap={
              smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s0}`
            }
          >
            <Stack
              justifyContent="center"
              width={smallScreen ? "100%" : "auto"}
            >
              <Searchfield
                name="searchrequestProgress"
                id="searchrequestProgress"
                label={smallScreen ? "" : tabLabels.search}
                placeholder={tabLabels.placeholderSearch}
                type="search"
                size="compact"
                value={searchrequestProgress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onSearchrequestProgress(e)
                }
                fullwidth={smallScreen}
              />
            </Stack>
          </Stack>

          {!smallScreen && (
            <Stack>
              <Text
                type="title"
                size="medium"
                appearance={ComponentAppearance.DARK}
              >
                {tabLabels.description}
              </Text>
            </Stack>
          )}

          <Table
            id="portal"
            tableLayout="auto"
            titles={titles}
            entries={entries}
            actions={actionsConfig(setEntryCanceled, detailsLabels.titleMoreDetails)}
            breakpoints={breakPoints}
            filter={searchrequestProgress}
            loading={loading}
            columnWidths={columnWidths}
            pageLength={pageLength}
            ellipsisCell={!smallScreen}
          />
        </Stack>
      </Stack>
    </BorderStack>
  );
};

export { RequestsInProgressTabUI };
