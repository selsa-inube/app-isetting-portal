import { useHome } from "@hooks/useHome";
import { ICardData } from "@ptypes/home/ICardData";
import { HomeUI } from "./interface";

const Home = () => {
  const {
    Collapse,
    SetCollapse,
    CollapseMenuRef,
    IsTablet,
    SmallScreen,
    Username,
    optionsCards,
    loading,
    hasData,
    multipleBusinessUnits,
    handlelogout,
  } = useHome();
  return (
    <HomeUI
      data={optionsCards as ICardData[]}
      collapse={Collapse}
      setCollapse={SetCollapse}
      collapseMenuRef={CollapseMenuRef}
      isTablet={IsTablet}
      smallScreen={SmallScreen}
      username={Username}
      loading={loading}
      hasData={hasData}
      multipleBusinessUnits={multipleBusinessUnits}
      handlelogout={handlelogout}
    />
  );
};

export { Home };
