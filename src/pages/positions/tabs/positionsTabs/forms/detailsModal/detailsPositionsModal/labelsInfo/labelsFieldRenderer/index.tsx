import { BorderStack } from "@design/modals/borderStack";
import { basic } from "@design/tokens";
import { inube, Text } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { ILabelsFieldRenderer } from "@ptypes/positions/labels/ILabelsFieldRenderer";

const LabelsFieldRenderer = (props: ILabelsFieldRenderer) => {
  const { item } = props;

  return (
    <BorderStack
      direction="column"
      background={inube.palette.neutral.N10}
      gap={basic.spacing.s4}
      borderRadius={basic.spacing.s100}
      padding={`${basic.spacing.s075} ${basic.spacing.s200}`}
    >
      <Text
        size="medium"
        type="label"
        weight="bold"
        appearance={ComponentAppearance.DARK}
      >
        {item.labelName}
      </Text>
      <Text size="medium" appearance={ComponentAppearance.GRAY}>
        {item.value}
      </Text>
    </BorderStack>
  );
};

export { LabelsFieldRenderer };
