import { Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IMenuHeading {
  title: string;
}

const MenuHeading = ({ title }: IMenuHeading) => (
  <Text
    type="title"
    size="small"
    appearance="gray"
    padding={`${basic.spacing.s16} ${basic.spacing.s16} ${basic.spacing.s8} ${basic.spacing.s16}`}
  >
    {title}
  </Text>
);

export { MenuHeading };
export type { IMenuHeading };
