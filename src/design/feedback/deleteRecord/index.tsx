import { MdDeleteOutline } from "react-icons/md";
import { DecisionModal } from "@design/modals/decisionModal";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { Icon, useMediaQuery, Text } from "@inubekit/inubekit";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { StyledContainerIcon } from "./styles";
interface IDelete {
  showModal: boolean;
  messageDelete: IMessageModal;
  onToggleModal: () => void;
  onClick: () => void;
  loading: boolean;
  setJustificationDelete?: (value: string) => void;
}

const DeleteRecord = (props: IDelete) => {
  const {
    showModal,
    messageDelete,
    loading,
    onToggleModal,
    onClick,
    setJustificationDelete,
  } = props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.DANGER}
          icon={<MdDeleteOutline />}
          size="16px"
          onClick={onToggleModal}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Eliminar
          </Text>
        )}
      </StyledContainerIcon>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={messageDelete.title}
          actionText={messageDelete.actionText}
          description={messageDelete.description}
          justificationOfDecision={true}
          onClick={onClick}
          onCloseModal={onToggleModal}
          setFieldEntered={setJustificationDelete}
          appearance={ComponentAppearance.DANGER}
          isLoading={loading}
        />
      )}
    </>
  );
};

export { DeleteRecord };
