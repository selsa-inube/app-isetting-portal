import { MdDeleteOutline } from "react-icons/md";
import { Icon, useMediaQuery, Text } from "@inubekit/inubekit";
import { DecisionModal } from "@design/modals/decisionModal";
import { portalId } from "@config/portalId";
import { deleteLabels } from "@config/deleteLabels";
import { mediaQueryTabletMain } from "@config/environment";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IDelete } from "@ptypes/design/IDelete";
import { StyledContainerIcon } from "./styles";

const DeleteRecord = (props: IDelete) => {
  const {
    showModal,
    messageDelete,
    loading,
    withText = true,
    onToggleModal,
    onClick,
    setJustificationDelete,
  } = props;

  const screenTablet = useMediaQuery(mediaQueryTabletMain);

  const showText = screenTablet && withText;
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
        {showText && (
          <Text type="body" size="medium">
            {deleteLabels.title}
          </Text>
        )}
      </StyledContainerIcon>
      {showModal && (
        <DecisionModal
          portalId={portalId}
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
