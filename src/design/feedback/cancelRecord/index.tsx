import { MdOutlineCancel } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";
import { DecisionModal } from "@design/modals/decisionModal";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { notCancelStatus } from "@config/status/notCancelStatus";
import { ICancelRecord } from "@ptypes/layout/ICancelRecord";
import { StyledContainerIcon } from "./styles";
const CancelRecord = (props: ICancelRecord) => {
  const { showModal, status, messageCancel, loading, onToggleModal, onClick } =
    props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  const notCancel = notCancelStatus.includes(status);

  return (
    <>
      <StyledContainerIcon
        onClick={!notCancel ? onToggleModal : undefined}
        $isTablet={screenTablet}
      >
        <Icon
          appearance={ComponentAppearance.DANGER}
          icon={<MdOutlineCancel />}
          size="16px"
          onClick={onToggleModal}
          cursorHover
          spacing="narrow"
          disabled={notCancel}
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Cancelar
          </Text>
        )}
      </StyledContainerIcon>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={messageCancel.title}
          actionText={messageCancel.actionText}
          description={messageCancel.description}
          onClick={onClick}
          onCloseModal={onToggleModal}
          appearance={ComponentAppearance.DANGER}
          isLoading={loading}
        />
      )}
    </>
  );
};

export { CancelRecord };
