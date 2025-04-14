import { Input, Textarea } from "@inubekit/inubekit";
import { ILabelsFieldRenderer } from "@ptypes/positions/labels/ILabelsFieldRenderer";

const LabelsFieldRenderer = (props: ILabelsFieldRenderer) => {
  const { item, isFirst } = props;
  return isFirst ? (
    <Input
      id={item.id}
      label={item.labelName}
      value={item.value}
      fullwidth
      type="text"
      size="compact"
    />
  ) : (
    <Textarea
      id={item.id}
      label={item.labelName}
      value={item.value}
      fullwidth
    />
  );
};

export { LabelsFieldRenderer };
