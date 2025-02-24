import { Stack, Breadcrumbs, useMediaQuery, Tabs } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Title } from "@design/label/Title";
import { crumbsPositions } from "@config/positionsTabs/navigation";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { RequestsInProgressTab } from "./tabs/requestsInProgressTab";
import { Positions } from "./tabs/positionsTabs";

interface IPositionsUI {
  isSelected: string;
  handleTabChange: (id: string) => void;
}

const PositionsUI = (props: IPositionsUI) => {
  const { isSelected, handleTabChange } = props;
  const smallScreen = useMediaQuery("(max-width: 990px)");
  const smallScreenTab = useMediaQuery("(max-width: 450px)");

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
          <Breadcrumbs crumbs={crumbsPositions} />
          <Title
            title="Cargos"
            description="Gestionar todo lo relacionado con los permisos para los usuarios de la Plataforma INUBE"
            sizeTitle="large"
          />
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
