import { Stack, Avatar, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IMenuUser {
  userName: string;
  businessUnit?: string;
  avatar?: boolean;
}

const MenuUser = ({
  userName,
  businessUnit = "Linix",
  avatar = true,
}: IMenuUser) => (
  <Stack
    gap={basic.spacing.s12}
    padding={`${basic.spacing.s12} ${basic.spacing.s16}`}
  >
    {avatar && (
      <Stack direction="column" justifyContent="center">
        <Avatar />
      </Stack>
    )}
    <Stack direction="column" justifyContent="center">
      <Text type="body" size="medium">
        {userName}
      </Text>
      <Text type="body" size="small" appearance="gray">
        {businessUnit}
      </Text>
    </Stack>
  </Stack>
);

export { MenuUser };
export type { IMenuUser };
