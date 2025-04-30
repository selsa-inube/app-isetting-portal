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

  const { hasLabels, hasActions, isMobile } = UseModalLabelsAndActions(
    labels,
    actions
  );

  const shouldRenderTableView =
    Array.isArray(dataTable) && dataTable.length > 0;
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
      shouldRenderTableView={shouldRenderTableView}
    />
  );
};

export { DetailsPositionsModal };
