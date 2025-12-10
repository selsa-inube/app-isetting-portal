import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { Text } from "@inubekit/inubekit";
import { IFieldDetails } from "@ptypes/design/IFieldDetails";

const FieldDetails = (props: IFieldDetails) => {
  const {
    labelDetail,
    entry,
  } = props;

  return (
    <BorderStack
      direction="column"
      width="100%"
      height="auto"
      borderRadius={basic.spacing.s100}
      padding={`${basic.spacing.s075} ${basic.spacing.s200}`}
      boxSizing="border-box"
      background={
        EComponentAppearance.GRAY
      }
      gap={basic.spacing.s050}
    >
      <Text size="medium" type="label" weight="bold">
        {labelDetail}
      </Text>
      <Text size="medium" appearance={EComponentAppearance.GRAY}>
        {entry}
      </Text>
    </BorderStack>
  );
};

export { FieldDetails };
