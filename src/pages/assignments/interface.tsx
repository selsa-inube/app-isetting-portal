import { Stack, Tabs, Breadcrumbs, Grid } from "@inubekit/inubekit";

import { MenuAddButton } from "@design/feedback/menuAddButton";
import { crumbsAssignments } from "@config/assignments/navigation";
import { basic } from "@design/tokens";
import { Title } from "@design/label/Title";
import { descriptionTitle } from "@config/assignments/descriptionTitle";
import { IAssignmentsUI } from "@ptypes/assignments/IAssignmentsUI";
import { AssignmentsTab } from "./tabs/assignmentsTab";
import { StyledMenuContainer } from "./styles";
import { RequestsInProgressTab } from "./tabs/requestsInProgressTab";

const AssignmentsUI = (props: IAssignmentsUI) => {
  const {
    isSelected,
    descriptionOptions,
    showAssigmentsTab,
    showRequestsInProgressTab,
    smallScreen,
    assignmentsTabs,
    showModal,
    showInfoModal,
    options,
    showAbsenceModal,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    handleTabChange,
  } = props;

  return (
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
        gap={smallScreen ? basic.spacing.s200 : basic.spacing.s300}
        direction="column"
      >
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsAssignments} />
          <Grid
            gap={basic.spacing.s200}
            justifyContent="space-between"
            templateColumns="1fr auto"
            templateRows="auto"
          >
            <Title
              title={descriptionOptions?.publicCode ?? ""}
              description={descriptionTitle}
              sizeTitle="large"
              navigatePage="/"
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
        <Stack gap={basic.spacing.s300} direction="column" width="100%">
          <Tabs
            tabs={assignmentsTabs}
            selectedTab={isSelected}
            onChange={handleTabChange}
          />
          {showAssigmentsTab && <AssignmentsTab showAbsenceModal={showAbsenceModal}/>}
          {showRequestsInProgressTab && <RequestsInProgressTab />}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AssignmentsUI };
