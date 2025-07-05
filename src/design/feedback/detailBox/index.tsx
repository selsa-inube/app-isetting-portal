import { BorderStack } from "@design/modals/borderStack";
import { Stack, Tag, Text } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IDetailBox } from "@ptypes/design/IDetailBox";

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

  return (
    <BorderStack
      key={id}
      direction="column"
      width={width}
      background="n10"
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
