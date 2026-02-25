import { MdOutlineCreate } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";
import { EComponentAppearance } from "@enum/appearances";
import { StyledContainerIcon } from "./styles";
import { disabledModal } from "@config/disabledModal";
import { portalId } from "@config/portalId";
import { DecisionModal } from "@design/modals/decisionModal";

interface IEditRecord {
  onEdit: () => void;
  showInfoModal: boolean;
}

const EditRecord = (props: IEditRecord) => {
  const { onEdit, showInfoModal } = props;

  const screenTablet = useMediaQuery("(max-width: 1068px)");

  return (
    <>
      <StyledContainerIcon onClick={onEdit} $isTablet={screenTablet}>
        <Icon
          appearance={EComponentAppearance.PRIMARY}
          icon={<MdOutlineCreate />}
          size={screenTablet ? "20px" : "16px"}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Editar
          </Text>
        )}
        {showInfoModal && (
          <DecisionModal
            portalId={portalId}
            title={disabledModal.title}
            actionText={disabledModal.actionText}
            description={disabledModal.description}
            subtitle={disabledModal.subtitle}
            onCloseModal={onEdit}
            onClick={onEdit}
            withCancelButton={false}
          />
        )}
      </StyledContainerIcon>
    </>
  );
};

export { EditRecord };
