import {
  Stack,
  Text,
  Icon,
  useMediaQuery,
  SkeletonIcon,
  SkeletonLine,
  Divider,
} from "@inubekit/inubekit";

import { basic } from "@design/tokens";

import { mediaQueryMobileSmall } from "@config/environment";

import { StyledAppCard } from "./styles";
import { IAppCard } from "@ptypes/design/IAppCard";
import { EComponentAppearance } from "@enum/appearances";

const AppCard = (props: IAppCard) => {
  const { label, description, icon, url, loading } = props;
  const screenMobile = useMediaQuery(mediaQueryMobileSmall);
  const appCardProps = {
    to: url ?? "",
    $isMobile: screenMobile,
  };
  if (loading) {
    return (
      <StyledAppCard {...appCardProps}>
        <Stack
          direction="column"
          gap={screenMobile ? basic.spacing.s050 : basic.spacing.s200}
        >
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
      </StyledAppCard>
    );
  }
  return (
    <StyledAppCard {...appCardProps}>
      <Stack
        direction="row"
        justifyContent="space-between"
        gap={screenMobile ? basic.spacing.s050 : basic.spacing.s200}
      >
        <Text type="title" size="medium" weight="bold">
          {label}
        </Text>
        <Icon
          icon={icon}
          appearance={EComponentAppearance.DARK}
          size={basic.spacing.s24}
          cursorHover
        />
      </Stack>
      <Divider dashed />
      <Stack justifyContent="flex-start">
        <Text type="body" size="small">
          {description}
        </Text>
      </Stack>
    </StyledAppCard>
  );
};

export { AppCard };
