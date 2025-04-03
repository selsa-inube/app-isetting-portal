import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text } from "@inubekit/inubekit";
import { InteractiveModal } from "@design/feedback/InteractiveModal";
import { UseDetailsModal } from "@hooks/positions/useDetailsModal";
import { IDetailsModal } from "@ptypes/positions/details/IDetailsModal";
import { StyledContainerIcon } from "./styles";

const DetailsModal = (props: IDetailsModal) => {
  const { data, labelsOptions } = props;
  const { showModal, handleToggleModal, screenTablet, dataTable } =
    UseDetailsModal(data);

  return (
    <>
      <StyledContainerIcon $isTablet={screenTablet} onClick={handleToggleModal}>
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
        <InteractiveModal
          portalId="portal"
          title="Detalles de cargo"
          infoData={data}
          infoTitle=""
          labels={labelsOptions}
          closeModal={handleToggleModal}
          dataTable={dataTable ?? []}
        />
      )}
    </>
  );
};

export { DetailsModal };
