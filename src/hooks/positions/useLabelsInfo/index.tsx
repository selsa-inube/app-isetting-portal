import { useMemo } from "react";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { ILabelsInfo } from "@ptypes/positions/details/ILabelsInfo";

const UseLabelsInfo = (
  labels: ILabelsInfo["labels"],
  infoData: IPosition,
  hasLabels: boolean
) => {
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

export { UseLabelsInfo };
