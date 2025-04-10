import { UseModalLabelsAndActions } from "@hooks/positions/useModalLabelsAndActions";
import { DetailsPositionsModalUI } from "./interface";
import { IFeedbackModal } from "@ptypes/positions/details/IFeedbackModal";

const DetailsPositionsModal = (props: IFeedbackModal) => {
  const {
    onClose,
    smallScreen,
    labels,
    infoData,
    dataTable,
    actions,
    actionsTitle,
  } = props;

  const { hasLabels, hasActions } = UseModalLabelsAndActions(labels, actions);

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
