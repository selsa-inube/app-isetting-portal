import { UseModalLabelsAndActions } from "@hooks/positions/useModalLabelsAndActions";
import { DetailsMissionModalUI } from "./interface";
import { IFeedbackModal } from "@ptypes/positions/details/IFeedbackModal";

const DetailsMissionModal = (props: IFeedbackModal) => {
  const {
    onClose,
    smallScreen,
    labels,
    infoData,
    dataTable,
    actions,
    actionsTitle,
  } = props;

  const { hasLabels, hasActions, isMobile } = UseModalLabelsAndActions(
    labels,
    actions
  );

  return (
    <DetailsMissionModalUI
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

export { DetailsMissionModal };
