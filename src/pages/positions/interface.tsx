import { Stack, Breadcrumbs, Tabs } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { PageTitle } from "@design/label/PageTitle";
import { Positions } from "./tabs/positionsTabs";
import { IPositionsUI } from "@ptypes/positions/tabs/ITabConfig";
import { RequestsInProgressTab } from "./tabs/requestsInProgressTab";
const PositionsUI = (props: IPositionsUI) => {
  const { isSelected, handleTabChange, smallScreenTab, data, smallScreen } =
    props;

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
      <Stack gap={basic.spacing.s600} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          {data && (
            <>
              <Breadcrumbs crumbs={data?.crumbs ?? []} />
              <PageTitle
                title={data.label}
                description={data.description}
                navigatePage="/privileges"
              />
            </>
          )}
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(positionsTabsConfig)}
            selectedTab={isSelected}
            onChange={handleTabChange}
            scroll={smallScreenTab ? true : false}
          />

          {isSelected === positionsTabsConfig.cargos.id && <Positions />}
          {isSelected === positionsTabsConfig.requestsInProgress.id && (
            <RequestsInProgressTab />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { PositionsUI };
