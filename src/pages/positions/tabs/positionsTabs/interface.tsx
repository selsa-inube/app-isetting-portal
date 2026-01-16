import { MdPersonAddAlt } from "react-icons/md";
import { basic } from "@design/tokens";
import { Button, Searchfield, Stack, Text } from "@inubekit/inubekit";
import {
  actionsConfig,
  titlesOptions,
  breakPoints,
} from "@config/positions/table";
import { IPositionsTabUI } from "@ptypes/positions/table/IPositions";
import { tabLabels } from "@config/tabLabels";
import { positionsTabLabels } from "@config/positions/positionTitle";
import { Table } from "@design/table";
import { IEntry } from "@ptypes/design/table/IEntry";
import { EComponentAppearance } from "@enum/appearances";
import { StyledButtonWrapper } from "./styles";

const PositionsTabUI = (props: IPositionsTabUI) => {
  const {
    handleSearchPositions,
    searchPosition,
    loading,
    data,
    smallScreen,
    columnWidths,
    setEntryDeleted,
  } = props;

  return (
    <Stack direction="column" width="-webkit-fill-available">
      <Stack
        direction="column"
        gap={basic.spacing.s150}
      >
        {smallScreen && (
          <Stack>
            <Text
              type="title"
              size="medium"
              appearance={EComponentAppearance.DARK}
              ellipsis
            >
              {positionsTabLabels.description}
            </Text>
          </Stack>
        )}
        <Stack
          gap={smallScreen ? basic.spacing.s150 : basic.spacing.s200}
          direction="column"
        >
          <Stack
            justifyContent="space-between"
            alignItems="center"
            width={smallScreen ? "100%" : "auto"}
          >
            <Searchfield
              name="searchPositions"
              id="searchPositions"
              label={smallScreen ? "" : tabLabels.search}
              placeholder={tabLabels.placeholderSearch}
              size="compact"
              value={searchPosition}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchPositions(e)
              }
              fullwidth={smallScreen}
            />

            {!smallScreen && (
              <StyledButtonWrapper>
                <Button
                  iconBefore={<MdPersonAddAlt />}
                  spacing="wide"
                  type="link"
                  path="/positions/add-position"
                >
                  {positionsTabLabels.buttonLabel}
                </Button>
              </StyledButtonWrapper>
            )}
          </Stack>

          {!smallScreen && (
            <Stack>
              <Text
                type="title"
                size={smallScreen ? "small" : "medium"}
                appearance={EComponentAppearance.DARK}
                ellipsis
              >
                {positionsTabLabels.description}
              </Text>
            </Stack>
          )}

          <Table
            id="portal"
            titles={titlesOptions}
            entries={data as IEntry[]}
            actions={actionsConfig(setEntryDeleted)}
            breakpoints={breakPoints}
            filter={searchPosition}
            loading={loading}
            columnWidths={columnWidths}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { PositionsTabUI };
