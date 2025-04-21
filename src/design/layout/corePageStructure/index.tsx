import { useContext, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthAndData } from "@context/authAndDataProvider";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { mainNavigation } from "@config/nav";
import { userMenu } from "@config/menuMainConfiguration";
import { useOptionsByBusinessunits } from "@hooks/subMenu/useOptionsByBusinessunits";
import { decrypt } from "@utils/decrypt";
import { ICardData } from "@ptypes/home/ICardData";
import { actionsConfig } from "@config/mainActionLogout";
import { nav } from "@config/mainNav";
import {
  Nav,
  Header,
  Icon,
  Grid,
  useMediaQuery,
  Stack,
} from "@inubekit/inubekit";
import { BusinessUnitChange } from "@design/inputs/BusinessUnitChange";
import {
  StyledAppPage,
  StyledCollapse,
  StyledCollapseIcon,
  StyledContainer,
  StyledContentImg,
  StyledHeaderContainer,
  StyledLogo,
  StyledMain,
} from "./styles";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

const CorePageStructure = () => {
  const {
    appData,
    businessUnitsToTheStaff,
    setBusinessUnitSigla,
    businessUnitSigla,
  } = useContext(AuthAndData);
  const { logout } = useAuth0();
  const [collapse, setCollapse] = useState(false);
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);
  const [selectedClient, setSelectedClient] = useState<string>("");

  const navigate = useNavigate();
  const isTablet = useMediaQuery("(max-width: 849px)");
  const isTabletMain = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    if (appData.businessUnit.publicCode) {
      setSelectedClient(appData.businessUnit.abbreviatedName);
    }
  }, [appData]);

  const handleLogoClick = (businessUnit: IBusinessUnitsPortalStaff) => {
    const selectJSON = JSON.stringify(businessUnit);
    setBusinessUnitSigla(selectJSON);
    setSelectedClient(businessUnit.abbreviatedName);
    setCollapse(false);
    navigate("/");
  };
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const { optionsCards } = useOptionsByBusinessunits(
    staffPortalId,
    businessUnitSigla
  );

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" justifyContent="unset">
        <StyledHeaderContainer>
          <Header
            navigation={mainNavigation(optionsCards as ICardData[])}
            user={{
              username: appData.user.userName,
              breakpoint: "848px",
            }}
            logoURL={renderLogo(appData.businessUnit.urlLogo)}
            menu={userMenu}
          />
        </StyledHeaderContainer>
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
        <StyledContainer>
          <Grid
            templateColumns={!isTablet ? "auto 1fr" : "1fr"}
            alignContent="unset"
          >
            {!isTablet && (
              <Stack height="100%">
                <Nav navigation={nav.items} actions={actionsConfig(logout)} />
              </Stack>
            )}

            <StyledMain $isMobile={isTabletMain}>
              <Outlet />
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
};

export { CorePageStructure };
