import { MdPersonAddAlt } from "react-icons/md";
import { basic } from "@design/tokens";
import { Button, Searchfield, Stack, Text } from "@inubekit/inubekit";
import { actionsConfig } from "@config/missions/missionTab/table/actionsConfig";
import { breakPoints } from "@config/missions/missionTab/table/breakPoints";
import { titlesOptions } from "@config/missions/missionTab/table/titlesoptions";
import { tabLabels } from "@config/tabLabels";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { Table } from "@design/table";
import { IMissionsTabUI } from "@ptypes/missions/IMissionsUI/IMissionsTabUI";
import { missionsTabLabels } from "@config/missions/missionTab/missionsTabLabels";
import { StyledButtonWrapper } from "./styles";

const MissionsTabUI = (props: IMissionsTabUI) => {
  const {
    handleSearchMissions,
    searchMission,
    loading,
    data,
    smallScreen,
    setEntryDeleted,
  } = props;

  return (
    <Stack direction="column" width="-webkit-fill-available">
      <Stack direction="column" gap={basic.spacing.s150}>
        {smallScreen && (
          <Stack>
            <Text
              type="title"
              size="medium"
              appearance={ComponentAppearance.DARK}
              ellipsis
            >
              {missionsTabLabels.description}
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

            {!smallScreen && (
              <StyledButtonWrapper>
                <Button
                  iconBefore={<MdPersonAddAlt />}
                  spacing="wide"
                  type="link"
                  path="/privileges/missions/add-mission"
                >
                  {missionsTabLabels.buttonLabel}
                </Button>
              </StyledButtonWrapper>
            )}
          </Stack>

          {!smallScreen && (
            <Stack>
              <Text
                type="title"
                size={smallScreen ? "small" : "medium"}
                appearance={ComponentAppearance.DARK}
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
            actions={actionsConfig(setEntryDeleted)}
            breakpoints={breakPoints}
            filter={searchMission}
            loading={loading}
            columnWidths={[75]}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { MissionsTabUI };
