import { Text, Grid, Stack, useMediaQuery } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyledBoxAttribute } from "./styles";
import { IBoxAttribute } from "./types";
import { ButtonAttribute } from "./buttonAttribute";

const BoxAttribute = (props: IBoxAttribute) => {
  const {
    label,
    value,
    withButton,
    buttonIcon,
    buttonValue,
    direction,
    onClickButton,
  } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <StyledBoxAttribute $smallScreen={isMobile}>
      <Grid
        templateColumns={direction === "column" ? "1fr" : "auto 1fr"}
        width="100%"
        gap={basic.spacing.s100}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          type="label"
          size={isMobile ? "small" : "medium"}
          appearance={ComponentAppearance.DARK}
          weight="bold"
        >
          {label}
        </Text>

        <Stack
          alignItems="center"
          justifyContent={direction === "column" ? "flex-start" : "flex-end"}
        >
          {withButton ? (
            <ButtonAttribute
              icon={buttonIcon}
              value={buttonValue}
              onClick={onClickButton}
            />
          ) : (
            <Text
              size={isMobile ? "small" : "medium"}
              appearance={ComponentAppearance.GRAY}
              textAlign={direction === "column" ? "start" : "end"}
            >
              {String(value)}
            </Text>
          )}
        </Stack>
      </Grid>
    </StyledBoxAttribute>
  );
};

export { BoxAttribute };
export type { IBoxAttribute };
