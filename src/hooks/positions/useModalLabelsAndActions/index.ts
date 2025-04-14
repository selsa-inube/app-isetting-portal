import { useMemo } from "react";
import { IAction } from "@ptypes/interactiveModal/IAction";
import { IField } from "@ptypes/interactiveModal/IField";

const UseModalLabelsAndActions = (labels: IField[], actions?: IAction[]) => {
  const hasLabels = useMemo(() => labels.length > 0, [labels]);
  const hasActions = useMemo(() => (actions?.length ?? 0) > 0, [actions]);

  return { hasLabels, hasActions };
};

export { UseModalLabelsAndActions };
