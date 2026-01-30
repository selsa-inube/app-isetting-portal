import { MdOutlineInfo, MdPersonAddAlt } from "react-icons/md";
import { basic } from "@design/tokens";
import { Button, Icon, Searchfield, Stack, Text } from "@inubekit/inubekit";
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
import { StyledContainer } from "./styles";
import { disabledModal } from "@src/config/disabledModal";
import { portalId } from "@src/config/portalId";
import { DecisionModal } from "@src/design/modals/decisionModal";

const PositionsTabUI = (props: IPositionsTabUI) => {
  const {
    handleSearchPositions,
    searchPosition,
    loading,
    data,
    smallScreen,
    columnWidths,
    showInfoModal,
    disabledButton,
    handleToggleInfoModal,
    setEntryDeleted,
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
        <Stack
          gap={smallScreen ? basic.spacing.s150 : basic.spacing.s400}
          direction="column"
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
            justifyContent={smallScreen ? "center" : "space-between"}
            direction={smallScreen ? "column-reverse" : "row"}
            gap={smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s0}`}
            width="100%"
          >
            <Stack
              justifyContent="center"
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
            </Stack>
            {!smallScreen && (
              <Stack alignItems="center">
                <Button
                  iconBefore={<MdPersonAddAlt />}
                  spacing="wide"
                  type="link"
                  path="/positions/add-position"
                  disabled={disabledButton}
                  fullwidth={smallScreen}
                >
                  {positionsTabLabels.buttonLabel}
                </Button>
                {disabledButton && (
                  <Icon
                    appearance={EComponentAppearance.PRIMARY}
                    icon={<MdOutlineInfo />}
                    onClick={handleToggleInfoModal}
                    cursorHover
                    size="14px"
                  />
                )}
              </Stack>
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
      {showInfoModal && (
        <DecisionModal
          portalId={portalId}
          title={disabledModal.title}
          actionText={disabledModal.actionText}
          description={disabledModal.description}
          subtitle={disabledModal.subtitle}
          onCloseModal={handleToggleInfoModal}
          onClick={handleToggleInfoModal}
          withCancelButton={false}
        />
      )}
    </StyledContainer>
  );
};

export { PositionsTabUI };
