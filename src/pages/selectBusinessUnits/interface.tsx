import { Outlet } from "react-router-dom";
import { Grid, Stack, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import {
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledImage,
} from "./styles";
import { ISelectBusinessUnitsUI } from "./types";

const SelectBusinessUnitsUI = ({
  screenTablet,
  imageWidth,
  appData,
}: ISelectBusinessUnitsUI) => {
  return (
    <Grid
      templateColumns={screenTablet ? "1fr" : "repeat(2, 1fr)"}
      templateRows={screenTablet ? "minmax(150px, 30vh) 1fr" : "100vh"}
    >
      <StyledWelcomeContainer>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={screenTablet ? `${basic.spacing.s200}` : `${basic.spacing.s400}`}
        >
          <Stack direction="column" alignItems="center">
            <Text as="h1" type="headline" size="large">
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
      <StyledOutletContainer>
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
