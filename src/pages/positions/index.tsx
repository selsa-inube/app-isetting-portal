import { useContext } from "react";
import { usePositionsTabs } from "@hooks/positions/usePositionsTabs";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { menuPositionLinks } from "@config/positions/menuInvitation";
import { AuthAndData } from "@context/authAndDataProvider";
import { catalogName } from "@config/positions/catalogName";
import { PositionsUI } from "./interface";

const Positions = () => {

  const { appData } =
    useContext(AuthAndData);
  const {
    isSelected,
    handleTabChange,
    smallScreen,
    showModal,
    showInfoModal,
    showModalUnits,
    formik,
    optionsUnits,
    comparisonData,
    unit,
    positionTab,
    showPositionsTab,
    showRequestTab,
    handleClickUnits,
    handleCloseModalUnits,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    handleChange,
  } = usePositionsTabs();

  return (
    <PositionsUI
      isSelected={isSelected ?? positionsTabsConfig(smallScreen).cargos.id}
      handleTabChange={handleTabChange}
      catalogName={catalogName}
      smallScreen={smallScreen}
      showModal={showModal}
      showInfoModal={showInfoModal}
      options={menuPositionLinks}
      onToggleInfoModal={onToggleInfoModal}
      onCloseMenu={onCloseMenu}
      onToggleModal={onToggleModal}
      showModalUnits={showModalUnits}
      formik={formik}
      optionsUnits={optionsUnits}
      onClickUnits={handleClickUnits}
      onCloseModalUnits={handleCloseModalUnits}
      comparisonData={comparisonData}
      onChange={handleChange}
      businessUnitSigla={appData.businessUnit.publicCode}
      selectedUnit={unit}
      positionTab={positionTab}
      showPositionsTab={showPositionsTab}
      showRequestTab={showRequestTab}
    />
  );
}


export { Positions };
