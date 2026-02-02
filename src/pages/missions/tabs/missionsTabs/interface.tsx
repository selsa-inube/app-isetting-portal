import { MdOutlineInfo, MdPersonAddAlt } from "react-icons/md";
import { basic } from "@design/tokens";
import { Button, Icon, Searchfield, Stack, Text } from "@inubekit/inubekit";
import { Table } from "@design/table";
import { EComponentAppearance } from "@enum/appearances";
import { actionsConfig } from "@config/missions/missionTab/table/actionsConfig";
import { breakPoints } from "@config/missions/missionTab/table/breakPoints";
import { titlesOptions } from "@config/missions/missionTab/table/titlesoptions";
import { tabLabels } from "@config/tabLabels";
import { missionsTabLabels } from "@config/missions/missionTab/missionsTabLabels";
import { detailsLabels } from "@config/missions/missionTab/detailsLabels";

import { IMissionsTabUI } from "@ptypes/missions/IMissionsUI/IMissionsTabUI";
import { disabledModal } from "@config/disabledModal";
import { portalId } from "@config/portalId";
import { DecisionModal } from "@design/modals/decisionModal";
import { StyledContainer } from "./styles";

const MissionsTabUI = (props: IMissionsTabUI) => {
  const {
    handleSearchMissions,
    searchMission,
    loading,
    data,
    smallScreen,
    columnWidths,
    setEntryDeleted,
    disabledButton,
    showInfoModal,
    handleToggleInfoModal,
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
                {missionsTabLabels.description}
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
                name="searchMission"
                id="searchMission"
                label={smallScreen ? "" : tabLabels.search}
                placeholder={tabLabels.placeholderSearch}
                size="compact"
                value={searchMission}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleSearchMissions(e)
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
                  variant="filled"
                  path="/missions/add-mission"
                  disabled={disabledButton}
                  fullwidth={smallScreen}
                >
                  {missionsTabLabels.buttonLabel}
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
                {missionsTabLabels.description}
              </Text>
            </Stack>
          )}

          <Table
            id="portal"
            titles={titlesOptions}
            entries={data ?? []}
            actions={actionsConfig(setEntryDeleted, detailsLabels.titleDetails)}
            breakpoints={breakPoints}
            filter={searchMission}
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

export { MissionsTabUI };
