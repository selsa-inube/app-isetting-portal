import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { Text } from "@inubekit/inubekit";
import { ILabelsFieldRenderer } from "@ptypes/positions/labels/ILabelsFieldRenderer";

const LabelsFieldRenderer = (props: ILabelsFieldRenderer) => {
  const { item } = props;

  return (
    <BorderStack
      direction="column"
      background={EComponentAppearance.LIGHT}
      gap={basic.spacing.s4}
      borderRadius={basic.spacing.s100}
      padding={`${basic.spacing.s075} ${basic.spacing.s200}`}
    >
      <Text
        size="medium"
        type="label"
        weight="bold"
        appearance={EComponentAppearance.DARK}
      >
        {item.labelName}
      </Text>
      <Text size="medium" appearance={EComponentAppearance.GRAY}>
        {item.value}
      </Text>
    </BorderStack>
  );
};

export { LabelsFieldRenderer };
