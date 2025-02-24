import { basic } from "@design/tokens";
import {
  SkeletonIcon,
  SkeletonLine,
  Stack,
  Text,
  Icon,
  useMediaQuery,
} from "@inubekit/inubekit";
import { StyledInteractiveBox } from "./styles";

interface IInteractiveBox {
  description?: string;
  icon?: React.ReactNode;
  label?: string;
  url?: string;
  isLoading?: boolean;
}

const InteractiveBox = ({
  label,
  description,
  icon,
  url,
  isLoading,
}: IInteractiveBox) => {
  const screenMobile = useMediaQuery("(max-width: 400px)");
  if (isLoading) {
    return (
      <StyledInteractiveBox to={url ?? ""} $isMobile={screenMobile}>
        <Stack direction="column" gap={basic.spacing.s200}>
          <Stack width="70%">
            <SkeletonLine animated />
          </Stack>
          <Stack width="100%">
            <SkeletonLine animated />
          </Stack>
        </Stack>
        <Stack justifyContent="flex-end">
          <SkeletonIcon animated />
        </Stack>
      </StyledInteractiveBox>
    );
  }
  return (
    <StyledInteractiveBox to={url ?? ""} $isMobile={screenMobile}>
      <Stack direction="column" gap={basic.spacing.s200}>
        <Text type="title" size="medium" weight="bold">
          {label}
        </Text>
        <Text type="body" size="small">
          {description}
        </Text>
      </Stack>
      <Stack justifyContent="flex-end">
        <Icon icon={icon} appearance="dark" size="24px" cursorHover />
      </Stack>
    </StyledInteractiveBox>
  );
};

export { InteractiveBox };
export type { IInteractiveBox };
