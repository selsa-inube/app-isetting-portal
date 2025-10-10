import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Nav, Header, Icon, Grid, Stack } from "@inubekit/inubekit";
import { MdOutlineChevronRight, MdOutlineWarningAmber } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthAndData } from "@context/authAndDataProvider";
import { userMenu } from "@config/menuMainConfiguration";
import { actionsConfig } from "@config/mainActionLogout";
import { useCorePageStructure } from "@hooks/design/useCorePageStructure";
import { renderLogo } from "../renderLogo/logoUtils";
import {
  StyledAppPage,
  StyledCollapseIcon,
  StyledContainer,
  StyledHeaderContainer,
  StyledMain,
} from "./styles";
import { EComponentAppearance } from "@enum/appearances";
import { useErrorManagement } from "@hooks/errorManagement";
import { DecisionModal } from "@design/modals/decisionModal";
import { errorModalConfig } from "@config/errorModal";
import { messageErrorStatusConsultation } from "@utils/messageErrorStatus";

const CorePageStructure = () => {
  const { appData, businessUnitsToTheStaff, businessUnitSigla } =
    useContext(AuthAndData);
  const { logout } = useAuth0();
  const { errorModal, errorData, closeErrorModal } = useErrorManagement();

  const {
    collapse,
    collapseMenuRef,
    isTablet,
    isTabletMain,
    optionsHeader,
    optionsNav,
    setCollapse,
  } = useCorePageStructure({ businessUnitSigla, logout });

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" justifyContent="unset">
        <StyledHeaderContainer>
          <Header
            navigation={optionsHeader}
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
          </>
        )}
        <StyledContainer>
          <Grid
            templateColumns={!isTablet ? "auto 1fr" : "1fr"}
            alignContent="unset"
          >
            {!isTablet && (
              <Stack height="100%">
                <Nav navigation={optionsNav} actions={actionsConfig(logout)} />
              </Stack>
            )}

            <StyledMain $isMobile={isTabletMain}>
              <Outlet />
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
      {errorModal && errorData && (
        <DecisionModal
          onCloseModal={closeErrorModal}
          title={errorModalConfig.title}
          withIcon
          icon={<MdOutlineWarningAmber />}
          appearance={EComponentAppearance.WARNING}
          showCancelButton={false}
          actionText={errorModalConfig.actionText}
          description={messageErrorStatusConsultation(errorData.code)}
          portalId={"portal"}
          onClick={closeErrorModal}
        />
      )}
    </StyledAppPage>
  );
};

export { CorePageStructure };
