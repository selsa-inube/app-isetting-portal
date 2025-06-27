import { Stack, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { StyledLink } from "./styles";

interface IMenuLink {
  label: string;
  icon?: React.ReactNode;
  path: string;
}

const MenuLink = ({ label, icon, path }: IMenuLink) => (
  <StyledLink to={path}>
    <Stack gap={basic.spacing.s12} alignItems="center">
      {icon}
      <Text size="small">{label}</Text>
    </Stack>
  </StyledLink>
);

export { MenuLink };
export type { IMenuLink };
