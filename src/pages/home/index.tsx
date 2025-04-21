import { UseHome } from "@hooks/useHome";
import { HomeUI } from "./interface";
import { ICardData } from "@ptypes/home/ICardData";

const Home = () => {
  const {
    Collapse,
    SetCollapse,
    SelectedClient,
    businessUnitsToTheStaff,
    HandleLogoClick,
    CollapseMenuRef,
    BusinessUnitChangeRef,
    IsTablet,
    SmallScreen,
    Username,
    optionsCards,
    loading,
  } = UseHome();
  return (
    <HomeUI
      data={optionsCards as ICardData[]}
      collapse={Collapse}
      setCollapse={SetCollapse}
      selectedClient={SelectedClient}
      businessUnitsToTheStaff={businessUnitsToTheStaff}
      handleLogoClick={HandleLogoClick}
      collapseMenuRef={CollapseMenuRef}
      businessUnitChangeRef={BusinessUnitChangeRef}
      isTablet={IsTablet}
      smallScreen={SmallScreen}
      username={Username}
      loading={loading}
    />
  );
};

export { Home };
