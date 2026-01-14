import { Stack, Breadcrumbs, Tabs, Grid } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

import { PageTitle } from "@design/label/PageTitle";

import { crumbsUsers } from "@config/users/navigation";
import { usersTitle } from "@config/users/usersTitle";
import { IUsersUI } from "@ptypes/users/IUsersUI";
import { UsersTab } from "./tabs/userTab";
import { RequestInProgress } from "./tabs/requestInProgressTab";
import { MenuAddButton } from "@src/design/feedback/menuAddButton";
import { StyledMenuContainer } from "@src/design/navigation/styles";

const UsersUI = (props: IUsersUI) => {
  const {
    smallScreen,
    title,
    isSelected,
    handleTabChange,
    showStaffTab,
    showRequestsInProgressTab,
    userTabs,
    showModal,
    showInfoModal,
    options,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
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
      gap={basic.spacing.s300}
    >
      <Stack gap={basic.spacing.s600} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsUsers} />
          <Grid
            gap={basic.spacing.s200}
            justifyContent="space-between"
            templateColumns="1fr auto"
            templateRows="auto"
          >
            <PageTitle
              title={title}
              description={usersTitle.description}
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
      </Stack>
      <Stack gap={basic.spacing.s300} direction="column">
        <Tabs
          tabs={userTabs}
          selectedTab={isSelected}
          onChange={handleTabChange}
        />
      </Stack>
      <Stack justifyContent="center">
        {showStaffTab && <UsersTab />}
        {showRequestsInProgressTab && <RequestInProgress />}
      </Stack>
    </Stack>
  );
};

export { UsersUI };
