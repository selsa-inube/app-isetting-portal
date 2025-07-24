import { useMemo } from "react";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IUseLabelsInfo } from "@ptypes/hooks/IUseLabelsInfo";

const useLabelsInfo = (props: IUseLabelsInfo) => {
  const { labels, infoData, hasLabels } = props;
  return useMemo(() => {
    return hasLabels
      ? labels.map((field) => ({
          id: field.id,
          labelName: field.labelName,
          value: infoData[field.id as keyof IPosition],
        }))
      : Object.keys(infoData).map((key) => ({
          id: key,
          labelName: key,
          value: infoData[key],
        }));
  }, [labels, infoData, hasLabels]);
};

export { useLabelsInfo };
