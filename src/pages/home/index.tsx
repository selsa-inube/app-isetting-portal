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
    padding,
    dataExists,
    multipleBusinessUnits,
    optionsHeader,
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
      hasData={dataExists}
      multipleBusinessUnits={multipleBusinessUnits}
      handlelogout={handlelogout}
      optionsHeader={optionsHeader}
      padding={padding}
    />
  );
};

export { Home };
