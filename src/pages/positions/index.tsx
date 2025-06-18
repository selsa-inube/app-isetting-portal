import { useContext } from "react";
import { UsePositionsTabs } from "@hooks/positions/usePositionsTabs";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { menuPositionLinks } from "@config/positions/menuInvitation";
import { AuthAndData } from "@context/authAndDataProvider";
import { catalogName } from "@config/positions/catalogName/inde";
import { PositionsUI } from "./interface";

const Positions =() => {

   const { businessUnitSigla } =
    useContext(AuthAndData);
    const {
      isSelected,
      handleTabChange,
      smallScreen,
      smallScreenTab,
      showModal,
      showInfoModal,
      showModalUnits,
      formik,
      optionsUnits,
      comparisonData,
      unit,
      handleClickUnits,
      handleCloseModalUnits,
      onToggleInfoModal,
      onCloseMenu,
      onToggleModal,
      handleChange,
    } = UsePositionsTabs();

    return (
      <PositionsUI
        isSelected={isSelected ?? positionsTabsConfig.cargos.id}
        handleTabChange={handleTabChange}
        catalogName={catalogName}
        smallScreen={smallScreen}
        smallScreenTab={smallScreenTab}
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
        businessUnitSigla={businessUnitSigla}
        selectedUnit={unit}
      />
    );
  }


export { Positions };
