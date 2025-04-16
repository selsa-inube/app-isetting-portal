import { Stack, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

import { StyledOptionItemChecked } from "./styles";
import { IOptionItemChecked } from "@ptypes/navigation/IOptionItemChecked";

const OptionItemChecked = (props: IOptionItemChecked) => {
  const { id, label, checked = false, onchange } = props;

  return (
    <StyledOptionItemChecked>
      <Stack gap={basic.spacing.s4}>
        <input
          readOnly
          type="checkbox"
          id={id}
          name={id}
          onChange={onchange}
          checked={checked}
        />
        <Text size="medium" weight="bold" type="body">
          {label}
        </Text>
      </Stack>
    </StyledOptionItemChecked>
  );
};

export { OptionItemChecked };
export type { IOptionItemChecked };
