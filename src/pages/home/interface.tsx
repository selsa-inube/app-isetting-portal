import { useContext } from "react";
import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { Header, Icon } from "@inubekit/inubekit";
import { Title } from "@design/label/Title";
import { AuthAndData } from "@context/authAndDataProvider";
import { IHome } from "@ptypes/home/IHome";
import { userMenu } from "@config/menuMainConfiguration";
import {
  StyledCollapseIcon,
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
import { RenderLogo } from "@design/feedback/renderLogo";

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
    optionsHeader,
    padding,
    handlelogout,
  } = props;

  const { appData } = useContext(AuthAndData);
  return (
    <>
      <BorderStack
        width="100%"
        direction="column"
        boxSizing="border-box"
        padding={padding}
        height="100vh"
        overflowY="auto"
      >
        <StyledHeaderContainer>
          <Header
            navigation={optionsHeader}
            logoURL={<RenderLogo imgUrl={appData.businessUnit.urlLogo} />}
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
        <BorderStack
          alignItems="center"
          justifyContent="center"
          gap={basic.spacing.s600}
          boxSizing="border-box"
          padding={basic.spacing.s200}
        >
          <BorderStack
            direction="column"
            gap={smallScreen ? `${basic.spacing.s300}` : `${basic.spacing.s0}`}
            maxWidth="1064px"
            minWidth="328px"
            boxSizing="border-box"
          >
            <StyledTitle $isTablet={isTablet}>
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
              justifyContent={isTablet ? "center" : "flex-start"}
              wrap="wrap"
              gap={basic.spacing.s400}
            >
              <BorderStack
                direction="row"
                boxSizing="border-box"
                padding={basic.spacing.s200}
                justifyContent={isTablet ? "center" : "flex-start"}
                wrap="wrap"
                width="100%"
                gap={basic.spacing.s250}
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
          </BorderStack>
        </BorderStack>
        {hasData && (
          <StyledFooter $isMobile={smallScreen}>
            <StyledLogo src={appData.businessManager.urlBrand} />
          </StyledFooter>
        )}
      </BorderStack>
    </>
  );
};

export { HomeUI };
