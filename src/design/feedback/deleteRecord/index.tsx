import { MdDeleteOutline } from "react-icons/md";
import { Icon, useMediaQuery, Text } from "@inubekit/inubekit";
import { DecisionModal } from "@design/modals/decisionModal";
import { portalId } from "@config/portalId";
import { deleteLabels } from "@config/deleteLabels";
import { mediaQueryTabletMain } from "@config/environment";
import { EComponentAppearance } from "@enum/appearances";
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
  } = props;

  const screenTablet = useMediaQuery(mediaQueryTabletMain);

  const showText = screenTablet && withText;
  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={EComponentAppearance.DANGER}
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
          onClick={onClick}
          onCloseModal={onToggleModal}
          appearance={EComponentAppearance.DANGER}
          loading={loading}
        />
      )}
    </>
  );
};

export { DeleteRecord };
