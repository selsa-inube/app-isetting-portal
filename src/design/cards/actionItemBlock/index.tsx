import { Stack, Text, Icon } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { StyledActionItemBlock } from "./styles";

interface IActionItemBlock {
  id: number;
  icon: React.ReactNode;
  label: string;
  description: string;
  url: string;
  domain: string;
}

const ActionItemBlock = (props: IActionItemBlock) => {
  const { icon, label, description, url } = props;
  return (
    <Stack direction="column">
      <StyledActionItemBlock to={url}>
        <Stack gap={basic.spacing.s4} alignItems="center" direction="column">
          <Icon
            appearance="dark"
            cursorHover={true}
            icon={icon}
            spacing="narrow"
            size="24px"
            shape="circle"
          />
          <Stack gap={basic.spacing.s4} direction="column" width="100%">
            <Text textAlign="center" type="title" size="medium">
              {label}
            </Text>
            <Text textAlign="center" size="small" appearance="gray">
              {description}
            </Text>
          </Stack>
        </Stack>
      </StyledActionItemBlock>
    </Stack>
  );
};

export { ActionItemBlock };
export type { IActionItemBlock };
