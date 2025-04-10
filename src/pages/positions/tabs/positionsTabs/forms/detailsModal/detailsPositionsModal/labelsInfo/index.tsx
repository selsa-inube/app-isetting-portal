import { UseLabelsInfo } from "@hooks/positions/useLabelsInfo";
import { Input, Textarea } from "@inubekit/inubekit";
import { ILabelsInfo } from "@ptypes/positions/details/ILabelsInfo";

const LabelsInfo = (props: ILabelsInfo) => {
  const { labels, infoData, hasLabels } = props;
  const fieldsToRender = UseLabelsInfo(labels, infoData, hasLabels);

  return (
    <>
      {fieldsToRender.map((item, index) => {
        return (
          item.value &&
          (index === 0 ? (
            <Input
              id={item.id}
              key={item.id}
              label={item.labelName}
              value={item.value}
              fullwidth
              type="text"
              size="compact"
            />
          ) : (
            <Textarea
              id={item.id}
              key={item.id}
              label={item.labelName}
              value={item.value}
              fullwidth
            />
          ))
        );
      })}
    </>
  );
};

export { LabelsInfo };
