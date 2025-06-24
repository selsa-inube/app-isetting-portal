import { Stack, Breadcrumbs, Tabs, Grid } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { PageTitle } from "@design/label/PageTitle";
import { StyledMenuContainer } from "@design/navigation/styles";
import { MenuAddButton } from "@design/feedback/menuAddButton";
import { IMissionsUI } from "@ptypes/missions/IMissionsUI";
import { missionTitle } from "@config/missions/missionTab/missionTitle";
import { crumbMissions } from "@config/missions/navigation";
import { MissionsTab } from "./tabs/missionsTabs";
import { RequestsInProgressTab } from "./tabs/requestsInProgressTab";

const MissionsUI = (props: IMissionsUI) => {
  const {
    isSelected,
    showModal,
    showInfoModal,
    options,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    handleTabChange,
    smallScreenTab,
    smallScreen,
    showMissionTab,
    showRequestTab,
    missionsTabs,
  } = props;

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={
          smallScreen
            ? `${basic.spacing.s200}`
            : `${basic.spacing.s400} ${basic.spacing.s800}`
        }
      >
        <Stack
          gap={smallScreen ? basic.spacing.s200 : basic.spacing.s600}
          direction="column"
        >
          <Stack gap={basic.spacing.s300} direction="column">
            <Stack gap={basic.spacing.s300} direction="column">
              <Breadcrumbs crumbs={crumbMissions} />
              <Grid
                gap={basic.spacing.s200}
                justifyContent="space-between"
                templateColumns="1fr auto"
                templateRows="auto"
              >
                <PageTitle
                  title={missionTitle.title}
                  description={missionTitle.description}
                  navigatePage="/privileges"
                />
                {smallScreen && (
                  <StyledMenuContainer>
                    <MenuAddButton
                      showModal={showModal}
                      showInfoModal={showInfoModal}
                      options={options}
                      onToggleInfoModal={onToggleInfoModal}
                      onCloseMenu={onCloseMenu}
                      onToggleModal={onToggleModal}
                    />
                  </StyledMenuContainer>
                )}
              </Grid>
            </Stack>
          </Stack>
          <Stack gap={basic.spacing.s300} direction="column">
            <Tabs
              tabs={missionsTabs}
              selectedTab={isSelected}
              onChange={handleTabChange}
              scroll={smallScreenTab ? true : false}
            />

            {showMissionTab && <MissionsTab />}
            {showRequestTab  && <RequestsInProgressTab />}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export { MissionsUI };
