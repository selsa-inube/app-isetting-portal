import { IAction } from "@ptypes/interactiveModal/IAction";
import { IField } from "@ptypes/interactiveModal/IField";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IEntry } from "@ptypes/table/IEntry";
import { DetailsPositionsModalUI } from "./interface";

interface FeedbackModalProps {
  onClose: () => void;
  smallScreen: boolean;
  labels: IField[];
  infoData: IPosition;
  actions?: IAction[];
  dataTable?: IEntry[];
  actionsTitle?: string;
}

const DetailsPositionsModal = (props: FeedbackModalProps) => {
  const {
    onClose,
    smallScreen,
    labels,
    infoData,
    dataTable,
    actions,
    actionsTitle,
  } = props;

  const hasLabels = labels.length > 0;
  const hasActions = (actions?.length ?? 0) > 0;

  return (
    <DetailsPositionsModalUI
      onClose={onClose}
      smallScreen={smallScreen}
      labels={labels}
      infoData={infoData}
      hasLabels={hasLabels}
      hasActions={hasActions}
      actions={actions}
      dataTable={dataTable}
      actionsTitle={actionsTitle}
    />
  );
};

export { DetailsPositionsModal };
