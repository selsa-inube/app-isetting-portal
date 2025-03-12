import { Outlet } from "react-router-dom";
import { Grid, Stack, Text, useMediaQueries } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import {
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledImage,
} from "./styles";
import { ISelectBusinessUnitsUI } from "./types";

const SelectBusinessUnitsUI = ({
  imageWidth,
  screenTablet,
  appData,
}: ISelectBusinessUnitsUI) => {
  const { "(max-width: 532px)": screenMobile }: Record<string, boolean> =
    useMediaQueries(["(max-width: 532px)"]);
  return (
    <Grid
      templateColumns={screenTablet ? "1fr" : "repeat(2, 1fr)"}
      templateRows={screenTablet ? "minmax(150px, 30vh) 1fr" : "100vh"}
    >
      <StyledWelcomeContainer $isMobile={screenMobile}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={screenTablet ? `${basic.spacing.s200}` : `${basic.spacing.s400}`}
        >
          <Stack direction="column" alignItems="center">
            <Text as="h1" type="headline" size="medium">
              Bienvenido a iSetting Portal
            </Text>
          </Stack>
          <StyledImage
            src={appData.businessManager.urlLogo}
            alt="Sistemas Enlinea"
            width={imageWidth()}
          />
        </Stack>
      </StyledWelcomeContainer>
      <StyledOutletContainer $isMobile={screenMobile}>
        <Stack
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          padding={
            screenTablet
              ? `${basic.spacing.s600} ${basic.spacing.s100} ${basic.spacing.s0}`
              : `${basic.spacing.s0}`
          }
        >
          <Outlet />
        </Stack>
      </StyledOutletContainer>
    </Grid>
  );
};

export { SelectBusinessUnitsUI };
