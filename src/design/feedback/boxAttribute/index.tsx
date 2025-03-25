import { Text, Stack, useMediaQuery } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyledBoxAttribute } from "./styles";
import { IBoxAttribute } from "./types";
import { ButtonAttribute } from "./buttonAttribute";

const BoxAttribute = (props: IBoxAttribute) => {
  const { label, value, withButton, buttonIcon, buttonValue, onClickButton } =
    props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <StyledBoxAttribute $smallScreen={isMobile}>
      <Stack alignItems="center">
        <Text
          type="label"
          size={isMobile ? "small" : "medium"}
          appearance={ComponentAppearance.DARK}
          weight="bold"
        >
          {label}
        </Text>
      </Stack>

      <Stack alignItems="center">
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
          >
            {String(value)}
          </Text>
        )}
      </Stack>
    </StyledBoxAttribute>
  );
};

export { BoxAttribute };
export type { IBoxAttribute };
