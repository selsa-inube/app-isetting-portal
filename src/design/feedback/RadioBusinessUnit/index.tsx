import { Grid, useMediaQueries, useMediaQuery, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

import { StyledRadioBusinessUnit, StyledRadio, StyledImage } from "./styles";

interface IRBusinessUnit {
  id: string;
  label: string;
  logo: string;
  name: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const RadioBusinessUnit = (props: IRBusinessUnit) => {
  const { name, id, value, label, logo, handleChange } = props;
  const smallScreen = useMediaQuery("(max-width: 532px)");
  const mediaQueries = ["(max-width: 532px)", "(max-width: 460px)"];
  const matches = useMediaQueries(mediaQueries);

  return (
    <StyledRadioBusinessUnit $isMobile={smallScreen}>
      <Grid
        templateColumns={
          matches["(max-width: 532px)"] ? "auto 1fr" : "auto 1fr 130px"
        }
        padding={
          matches["(max-width: 532px)"]
            ? `${basic.spacing.s100} ${basic.spacing.s200}`
            : `${basic.spacing.s200} ${basic.spacing.s300}`
        }
        height={matches["(max-width: 532px)"] ? "auto" : "72px"}
        alignItems="center"
        alignContent="center"
        gap={basic.spacing.s200}
        width="100%"
      >
        <StyledRadio
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
        />
        <Text size="medium">{label}</Text>
        <StyledImage
          src={logo}
          alt="Logo de empresa"
          $smallScreen={smallScreen}
        />
      </Grid>
    </StyledRadioBusinessUnit>
  );
};

export { RadioBusinessUnit };
export type { IRBusinessUnit };
