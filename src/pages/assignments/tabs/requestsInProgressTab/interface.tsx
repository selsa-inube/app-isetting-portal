import { Searchfield, Stack, Text } from "@inubekit/inubekit";

import { Table } from "@design/table";
import { basic } from "@design/tokens";
import { tabLabels } from "@config/tabLabels";
import { titles } from "@config/assignments/requestTab/table/titles";
import { breakPoints } from "@config/assignments/requestTab/table/breakPoints";
import { IRequestsInProgressTabUI } from "@ptypes/requestsInProgress/IRequestsInProgressTabUI";
import { actionsConfig } from "@config/assignments/requestTab/table/actionsConfig";
import { BorderStack } from "@design/layout/borderStack";
import { EComponentAppearance } from "@enum/appearances";
import { portalId } from "@config/portalId";

const RequestsInProgressTabUI = (props: IRequestsInProgressTabUI) => {
  const {
    entries,
    searchRequestProgress,
    loading,
    smallScreen,
    columnWidths,
    pageLength,
    setEntryCanceled,
    onSearchRequestProgress,
  } = props;

  return (
    <BorderStack
      boxSizing="initial"
      border={ EComponentAppearance.DARK }
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
                appearance={EComponentAppearance.DARK}
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
                name="searchRequestProgress"
                id="searchRequestProgress"
                label={smallScreen ? "" : tabLabels.search}
                placeholder={tabLabels.placeholderSearch}
                size="compact"
                value={searchRequestProgress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onSearchRequestProgress(e)
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
                appearance={EComponentAppearance.DARK}
              >
                {tabLabels.description}
              </Text>
            </Stack>
          )}

          <Table
            id={portalId}
            tableLayout="auto"
            titles={titles}
            entries={entries}
            actions={actionsConfig(setEntryCanceled)}
            breakpoints={breakPoints}
            filter={searchRequestProgress}
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
