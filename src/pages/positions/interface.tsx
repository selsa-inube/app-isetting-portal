import { Stack, Breadcrumbs, Tabs, Grid } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { PageTitle } from "@design/label/PageTitle";
import { IPositionsUI } from "@ptypes/positions/tabs/IPositionsUI";
import { RequestsInProgressTab } from "./tabs/requestsInProgressTab";
import { PositionsTab } from "./tabs/positionsTabs";
import { StyledMenuContainer } from "@design/navigation/styles";
import { MenuAddButton } from "@design/feedback/menuAddButton";
import { positionTitle } from "@config/positionsTabs/positionsTabLabels";
import { crumbPosition } from "@config/positions/navigation";
import { SelectBusUnitModal } from "@design/modals/selectBusUnitModal";
import { selectBusUnitsLabels } from "@config/positions/selectBusUnitsLabels";

const PositionsUI = (props: IPositionsUI) => {
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
    showModalUnits,
    formik,
    optionsUnits,
    comparisonData,
    selectedUnit,
    businessUnitSigla,
    onChange,
    onClickUnits,
    onCloseModalUnits,
  } = props;

  return (
    <>
      {showModalUnits && (
        <SelectBusUnitModal
          portalId="portal"
          formik={formik}
          options={optionsUnits}
          onClick={onClickUnits}
          onCloseModal={onCloseModalUnits}
          labelActionButton={selectBusUnitsLabels.labelActionButton}
          labelCloseButton={selectBusUnitsLabels.labelCloseButton}
          labelCloseModal={selectBusUnitsLabels.labelCloseModal}
          description={selectBusUnitsLabels.description}
          smallScreen={smallScreen}
          comparisonData={comparisonData}
          onChange={onChange}
        />
      )}

      {businessUnitSigla && (
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
                <Breadcrumbs crumbs={crumbPosition} />
                <Grid
                  gap={basic.spacing.s200}
                  justifyContent="space-between"
                  templateColumns="1fr auto"
                  templateRows="auto"
                >
                  <PageTitle
                    title={positionTitle.title}
                    description={positionTitle.description}
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
                tabs={Object.values(positionsTabsConfig)}
                selectedTab={isSelected}
                onChange={handleTabChange}
                scroll={smallScreenTab ? true : false}
              />

              {isSelected === positionsTabsConfig.cargos.id && <PositionsTab businessUnitCode={selectedUnit} />}
              {isSelected === positionsTabsConfig.requestsInProgress.id && (
                <RequestsInProgressTab />
              )}
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export { PositionsUI };
