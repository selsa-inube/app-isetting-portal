import { BorderStack } from "@design/modals/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { inube, Text } from "@inubekit/inubekit";
import { IFieldDetails } from "@ptypes/design/IFieldDetails";
import { useThemeData } from "@utils/theme";

const FieldDetails = (props: IFieldDetails) => {
  const {
    labelDetail,
    entry,
  } = props;
  const theme = useThemeData();
  return (
    <BorderStack
      direction="column"
      width="100%"
      height="auto"
      borderRadius={basic.spacing.s100}
      padding={`${basic.spacing.s075} ${basic.spacing.s200}`}
      boxSizing="border-box"
      background={
        theme ? theme?.palette?.neutral?.N10 : inube.palette.neutral.N10
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
