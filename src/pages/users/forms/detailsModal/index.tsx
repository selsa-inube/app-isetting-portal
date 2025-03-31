import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text } from "@inubekit/inubekit";
import { IDetailsModalProps } from "@ptypes/positions/details";
import { StyledContainerIcon } from "./styles";
import { InteractiveModalDeatailsUsers } from "@design/feedback/InteractiveModalDeatailsUsers";
import { UseDetailsModal } from "@hooks/users/useDetailsModal";

const DetailsModal = (props: IDetailsModalProps) => {
  const { data, labelsOptions } = props;
  const { showModal, handleToggleModal, screenTablet, dataTable } =
    UseDetailsModal(data);

  return (
    <>
      <StyledContainerIcon onClick={handleToggleModal} $isTablet={screenTablet}>
        <Icon
          icon={<MdOutlineRemoveRedEye />}
          size="16px"
          appearance="dark"
          cursorHover
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Detalles
          </Text>
        )}
      </StyledContainerIcon>
      {showModal && data && (
        <InteractiveModalDeatailsUsers
          closeModal={handleToggleModal}
          infoData={data}
          labels={labelsOptions}
          portalId="portal"
          title="Detalles del usuario"
          dataTable={dataTable ?? []}
        />
      )}
    </>
  );
};

export { DetailsModal };
