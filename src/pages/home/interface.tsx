import { useContext } from "react";
import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { Header, Icon } from "@inubekit/inubekit";
import { nav, userMenu } from "@config/nav";
import { Title } from "@design/label/Title";
import { InteractiveBox } from "@design/cards/interactiveBox";
import { BusinessUnitChange } from "@design/inputs/BusinessUnitChange";
import { renderLogo } from "@design/layout/renderLogo/logoUtils";
import { AuthAndData } from "@context/authAndDataProvider";
import {
  StyledCollapse,
  StyledCollapseIcon,
  StyledContainer,
  StyledContainerCards,
  StyledContainerSection,
  StyledFooter,
  StyledHeaderContainer,
  StyledLogo,
  StyledTitle,
} from "./styles";
import { IHome } from "./types";

const HomeUI = (props: IHome) => {
  const {
    data,
    collapse,
    setCollapse,
    selectedClient,
    businessUnitsToTheStaff,
    handleLogoClick,
    collapseMenuRef,
    businessUnitChangeRef,
    isTablet,
    smallScreen,
    username,
  } = props;

  const { appData } = useContext(AuthAndData);

  return (
    <>
      <StyledContainer>
        <StyledHeaderContainer>
          <Header
            portalId="portal"
            navigation={nav}
            logoURL={renderLogo(appData.businessUnit.urlLogo)}
            user={{
              username: appData.user.userName,
              breakpoint: "848px",
            }}
            menu={userMenu}
          />
          {businessUnitsToTheStaff.length > 1 && (
            <>
              <StyledCollapseIcon
                $collapse={collapse}
                onClick={() => setCollapse(!collapse)}
                $isTablet={isTablet}
                ref={collapseMenuRef}
              >
                <Icon
                  icon={<MdOutlineChevronRight />}
                  appearance="primary"
                  size="24px"
                  cursorHover
                />
              </StyledCollapseIcon>
              {collapse && (
                <StyledCollapse ref={businessUnitChangeRef}>
                  <BusinessUnitChange
                    businessUnits={businessUnitsToTheStaff}
                    onLogoClick={handleLogoClick}
                    selectedClient={selectedClient}
                  />
                </StyledCollapse>
              )}
            </>
          )}
        </StyledHeaderContainer>
        <StyledContainerSection $smallScreen={smallScreen}>
          <StyledTitle $smallScreen={smallScreen}>
            <Title
              title={`Bienvenid@, ${username}`}
              description="Selecciona una opción para empezar a ajustar la configuración."
              icon={<MdOutlineDoorFront />}
              sizeTitle="large"
            />
          </StyledTitle>
          <StyledContainerCards $smallScreen={smallScreen}>
            {data?.map((card) => (
              <InteractiveBox
                key={card.id}
                label={card.label}
                description={card.description}
                icon={card.icon}
                url={card.url}
              />
            ))}
          </StyledContainerCards>
        </StyledContainerSection>
        <StyledFooter>
          <StyledLogo src={appData.businessManager.urlBrand} />
        </StyledFooter>
      </StyledContainer>
    </>
  );
};

export { HomeUI };
