import { UseLabelsInfo } from "@hooks/positions/useLabelsInfo";
import { ILabelsInfo } from "@ptypes/positions/details/ILabelsInfo";
import { LabelsFieldRenderer } from "./labelsFieldRenderer";

const LabelsInfo = (props: ILabelsInfo) => {
  const { labels, infoData, hasLabels } = props;
  const fieldsToRender = UseLabelsInfo(labels, infoData, hasLabels);

  return (
    <>
      {fieldsToRender.map((item, index) =>
        item.value ? (
          <LabelsFieldRenderer
            key={item.id}
            item={item}
            isFirst={index === 0}
          />
        ) : null
      )}
    </>
  );
};

export { LabelsInfo };
