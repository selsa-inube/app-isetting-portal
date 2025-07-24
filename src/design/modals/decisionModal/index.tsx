import { useDecisionModal } from "@hooks/design/useDecisionModal";
import { detailsModal } from "@config/details";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IDecisionModal } from "@ptypes/modals/decisionModal/IDecisionModal";
import { DecisionModalUI } from "./interface";

const DecisionModal = (props: IDecisionModal) => {
  const {
    actionText,
    icon = <></>,
    withIcon = false,
    description,
    isLoading = false,
    justificationOfDecision = false,
    portalId,
    title,
    appearance = ComponentAppearance.PRIMARY,
    onClick,
    onCloseModal,
    setFieldEntered,
    showCancelButton = true,
    withCancelButton = true,
    subtitle
  } = props;

  const { formik, isMobile, isMobileTextarea, getFieldState, comparisonData } =
    useDecisionModal({
      justificationOfDecision,
      setFieldEntered,
    });

  const node = document.getElementById(portalId);
  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return (
    <DecisionModalUI
      actionText={actionText}
      appearance={appearance}
      comparisonData={comparisonData}
      description={description}
      formik={formik}
      icon={icon}
      isLoading={isLoading}
      justificationOfDecision={justificationOfDecision}
      onClick={onClick}
      onCloseModal={onCloseModal}
      portalId={portalId}
      title={title}
      withIcon={withIcon}
      isMobile={isMobile}
      isMobileTextarea={isMobileTextarea}
      getFieldState={getFieldState}
      showCancelButton={showCancelButton}
      withCancelButton={withCancelButton}
      cancelButton={detailsModal.buttonCancel}
      withButton={detailsModal.buttonClear}
      subtitle={subtitle}
    />
  );
};

export { DecisionModal };
