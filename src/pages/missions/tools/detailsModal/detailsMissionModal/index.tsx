import { useModalLabelsAndActions } from "@hooks/positions/useModalLabelsAndActions";
import { IFeedbackModal } from "@ptypes/positions/details/IFeedbackModal";
import { DetailsMissionModalUI } from "./interface";

const DetailsMissionModal = (props: IFeedbackModal) => {
  const {
    onClose,
    smallScreen,
    labels,
    infoData,
    dataTable,
    actions,
    actionsTitle,
    title,
  } = props;

  const { hasLabels, hasActions, isMobile } = useModalLabelsAndActions({
    labels,
    actions
  });

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
      title={title}
    />
  );
};

export { DetailsMissionModal };
