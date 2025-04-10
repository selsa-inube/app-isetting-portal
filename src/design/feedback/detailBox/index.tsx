import { BorderStack } from "@design/modals/borderStack";
import { Stack, Tag, Text } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IEntry } from "@ptypes/table/IEntry";

interface IDetailBox {
  field: { id: string; titleName: string };
  data: IEntry;
  id: number;
  width: string;
  backgroundColor: string;
  borderRadius?: string;
  padding?: string;
  borderColor?: string;
  withTag?: boolean;
  ellipsis?: boolean;
}

const DetailBox = (props: IDetailBox) => {
  const {
    id,
    field,
    data,
    width,
    backgroundColor,
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
      background={backgroundColor}
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
            weight="strong"
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
