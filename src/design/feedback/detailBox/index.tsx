import { BorderStack } from "@design/modals/borderStack";
import { inube, Stack, Tag, Text } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IDetailBox } from "@ptypes/design/IDetailBox";
import { useThemeData } from "@utils/theme";

const DetailBox = (props: IDetailBox) => {
  const {
    id,
    field,
    data,
    width,
    borderRadius,
    borderColor,
    padding,
    withTag,
    ellipsis = false,
  } = props;

  const theme = useThemeData();
  return (
    <BorderStack
      key={id}
      direction="column"
      width={width}
      background={theme?.palette.neutral.N10 ?? inube.palette.neutral.N10}
      borderRadius={borderRadius}
      border={borderColor}
      boxSizing="border-box"
      padding={padding}
    >
      <Text size="medium" type="label" weight="bold">
        {field.titleName}
      </Text>

      {withTag ? (
        <Stack width="auto">
          <Tag
            appearance={ComponentAppearance.GRAY}
            label={data[field.id]}
            displayIcon={false}
          />
        </Stack>
      ) : (
        <Text
          size="small"
          appearance={ComponentAppearance.GRAY}
          ellipsis={ellipsis}
        >
          {data[field.id]}
        </Text>
      )}
    </BorderStack>
  );
};

export { DetailBox };
