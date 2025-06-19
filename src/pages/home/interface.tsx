import { useContext } from "react";
import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { Header, Icon, Text } from "@inubekit/inubekit";
import { Title } from "@design/label/Title";
import { InteractiveBox } from "@design/cards/interactiveBox";
import { renderLogo } from "@design/layout/renderLogo/logoUtils";
import { AuthAndData } from "@context/authAndDataProvider";
import { IHome } from "@ptypes/home/IHome";
import { userMenu } from "@config/menuMainConfiguration";
import { mainNavigation } from "@config/nav";
import {
  StyledCollapseIcon,
  StyledContainer,
  StyledContainerCards,
  StyledContainerSection,
  StyledFooter,
  StyledHeaderContainer,
  StyledLogo,
  StyledTitle,
} from "./styles";
import { homeLabel } from "@config/homeLabel";

const HomeUI = (props: IHome) => {
  const {
    data,
    loading,
    collapse,
    setCollapse,
    collapseMenuRef,
    isTablet,
    smallScreen,
    username,
    hasData,
    multipleBusinessUnits
  } = props;

  const { appData } = useContext(AuthAndData);
  
  return (
    <>
      <StyledContainer>
        <StyledHeaderContainer>
          <Header
            navigation={mainNavigation(data)}
            logoURL={renderLogo(appData.businessUnit.urlLogo)}
            user={{
              username: appData.user.userName,
              breakpoint: "848px",
            }}
            menu={userMenu}
          />
          { multipleBusinessUnits && (
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
            {loading ? (
              <>
                <InteractiveBox isLoading={loading} />
                <InteractiveBox isLoading={loading} />
              </>
            ) : (
              <>
                { hasData ? (
                  data?.map((card) => (
                    <InteractiveBox
                      key={card.id}
                      label={card.label}
                      description={card.description}
                      icon={card.icon}
                      url={card.url}
                      isLoading={loading}
                    />
                  ))
                ) : (
                  <Text type="body" size="medium">
                    {homeLabel.noInfo}
                  </Text>
                )}{" "}
              </>
            )}
          </StyledContainerCards>
        </StyledContainerSection>
        <StyledFooter $isMobile={smallScreen}>
          <StyledLogo src={appData.businessManager.urlBrand} />
        </StyledFooter>
      </StyledContainer>
    </>
  );
};

export { HomeUI };
