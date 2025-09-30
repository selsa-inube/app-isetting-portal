import { Stack, Breadcrumbs, Tabs } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

import { PageTitle } from "@design/label/PageTitle";

import { crumbsUsers } from "@config/users/navigation";
import { usersTitle } from "@config/users/usersTitle";
import { IUsersUI } from "@ptypes/users/IUsersUI";
import { UsersTab } from "./tabs/userTab";
import { RequestInProgress } from "./tabs/requestInProgressTab";

const UsersUI = (props: IUsersUI) => {
  const {
    smallScreen,
    title,
    isSelected,
    handleTabChange,
    showStaffTab,
    showRequestsInProgressTab,
    userTabs,
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
          <PageTitle
            title={title}
            description={usersTitle.description}
            navigatePage="/"
          />
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
