import { Stack, Breadcrumbs, useMediaQuery, Tabs } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { PageTitle } from "@design/label/PageTitle";
import { privilegeOptionsConfig } from "@config/options/privilegeOptions";
import { useSubOptions } from "@hooks/subMenu/useSubOptions";
import { RequestsInProgressTab } from "./tabs/requestsInProgressTab";
import { Positions } from "./tabs/positionsTabs";

interface IPositionsUI {
  isSelected: string;
  handleTabChange: (id: string) => void;
  catalogName: string;
}

const PositionsUI = (props: IPositionsUI) => {
  const { isSelected, handleTabChange, catalogName } = props;
  const smallScreen = useMediaQuery("(max-width: 990px)");
  const smallScreenTab = useMediaQuery("(max-width: 450px)");
  const { subOptions } = useSubOptions(catalogName);
  const data = privilegeOptionsConfig(subOptions).find(
    (item, index) => item[index]?.url === location.pathname
  );

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
              <Breadcrumbs crumbs={data[0].crumbs} />
              <PageTitle
                title={data[0].label}
                description={data[0].description}
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
