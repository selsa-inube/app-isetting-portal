import { BorderStack } from "@design/layout/borderStack";
import { EComponentAppearance } from "@enum/appearances";
import { Stack, Tag, Text } from "@inubekit/inubekit";
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
      background={EComponentAppearance.GRAY}
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
            appearance={EComponentAppearance.GRAY}
            label={data[field.id]}
            displayIcon={false}
          />
        </Stack>
      ) : (
        <Text
          size="small"
          appearance={EComponentAppearance.GRAY}
          ellipsis={ellipsis}
        >
          {data[field.id]}
        </Text>
      )}
    </BorderStack>
  );
};

export { DetailBox };
