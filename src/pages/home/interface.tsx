import { useContext } from "react";
import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { Header, Icon, Stack } from "@inubekit/inubekit";
import { Title } from "@design/label/Title";

import { renderLogo } from "@design/layout/renderLogo/logoUtils";
import { AuthAndData } from "@context/authAndDataProvider";
import { IHome } from "@ptypes/home/IHome";
import { userMenu } from "@config/menuMainConfiguration";
import { mainNavigation } from "@config/nav";
import {
  StyledCollapseIcon,
  StyledContainer,
  StyledFooter,
  StyledHeaderContainer,
  StyledLogo,
  StyledTitle,
} from "./styles";
import { AppCard } from "@design/feedback/appCard";
import { BorderStack } from "@design/layout/borderStack";
import { ErrorPage } from "@design/layout/ErrorPage";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";

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
    multipleBusinessUnits,
    handlelogout,
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
          {multipleBusinessUnits && (
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
        <Stack justifyContent="center">
          <BorderStack
            direction="column"
            padding={
              smallScreen ? `${basic.spacing.s200}` : `${basic.spacing.s0}`
            }
            gap={smallScreen ? `${basic.spacing.s300}` : `${basic.spacing.s0}`}
            boxSizing="initial"
            width="70%"
          >
            <StyledTitle $smallScreen={smallScreen}>
              <Title
                title={`Bienvenid@, ${username}`}
                description="Selecciona una opción para empezar a ajustar la configuración."
                icon={<MdOutlineDoorFront />}
                sizeTitle="large"
              />
            </StyledTitle>
            <BorderStack
              direction="row"
              boxSizing="border-box"
              padding={
                smallScreen ? `${basic.spacing.s4}` : `${basic.spacing.s16} `
              }
              justifyContent={smallScreen ? "center" : "flex-start"}
              wrap="wrap"
              gap={basic.spacing.s20}
              borderRadius={basic.spacing.s8}
              border={EComponentAppearance.DARK}
            >
              {loading ? (
                <AppCard
                  label={""}
                  description={""}
                  icon={""}
                  url={""}
                  loading
                />
              ) : (
                <>
                  {hasData ? (
                    <>
                      {data?.map((card) => (
                        <AppCard
                          key={card.id}
                          label={card.publicCode}
                          description={card.description}
                          icon={card.icon}
                          url={card.url}
                          loading={false}
                        />
                      ))}
                    </>
                  ) : (
                    <BorderStack
                      direction="column"
                      boxSizing="border-box"
                      width="100%"
                      height="80vh"
                    >
                      <ErrorPage errorCode={500} onClick={handlelogout} />
                    </BorderStack>
                  )}
                </>
              )}
            </BorderStack>
          </BorderStack>
        </Stack>
        <StyledFooter $isMobile={smallScreen}>
          <StyledLogo src={appData.businessManager.urlBrand} />
        </StyledFooter>
      </StyledContainer>
    </>
  );
};

export { HomeUI };
