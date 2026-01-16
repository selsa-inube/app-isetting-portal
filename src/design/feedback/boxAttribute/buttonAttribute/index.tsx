import { Text, Icon, Stack } from "@inubekit/inubekit";
import { EComponentAppearance } from "@enum/appearances";
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
          <Icon icon={icon} appearance={EComponentAppearance.DARK} />
        </Stack>
      )}
      <Text size="small">{value}</Text>
    </StyledContainer>
  );
};

export { ButtonAttribute };
