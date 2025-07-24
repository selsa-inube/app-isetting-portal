import { useModalLabelsAndActions } from "@hooks/positions/useModalLabelsAndActions";
import { IFeedbackModal } from "@ptypes/positions/details/IFeedbackModal";
import { DetailsPositionsModalUI } from "./interface";

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

  const { hasLabels, hasActions, isMobile } = useModalLabelsAndActions({
    labels,
    actions,
  });

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
      isMobile={isMobile}
    />
  );
};

export { DetailsPositionsModal };
