import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { basic } from "@design/tokens";
import { StyledContainer } from "./styles";

interface IButtonAttribute {
  onClick?: () => void;
  icon?: React.JSX.Element;
  value?: string | number;
}

const ButtonAttribute = (props: IButtonAttribute) => {
  const { onClick, icon, value } = props;

  return (
    <StyledContainer onClick={onClick}>
      {icon && (
        <Stack
          justifyContent="center"
          alignItems="center"
          padding={basic.spacing.s025}
        >
          <Icon icon={icon} appearance={ComponentAppearance.DARK} />
        </Stack>
      )}
      <Text size="small">{value}</Text>
    </StyledContainer>
  );
};

export { ButtonAttribute };
