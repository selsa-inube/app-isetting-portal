import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text } from "@inubekit/inubekit";
import { useDetailsModal } from "@hooks/positions/useDetailsModal";
import { IDetailsModal } from "@ptypes/positions/details/IDetailsModal";
import { StyledContainerIcon } from "./styles";
import { DetailsPositionsModal } from "./detailsPositionsModal";
import { EComponentAppearance } from "@enum/appearances";

const DetailsModal = (props: IDetailsModal) => {
  const { data, labelsOptions } = props;
  const { showModal, handleToggleModal, screenTablet, dataTable } =
    useDetailsModal(data);

  return (
    <>
      <StyledContainerIcon $isTablet={screenTablet} onClick={handleToggleModal}>
        <Icon
          icon={<MdOutlineRemoveRedEye />}
          size="16px"
          appearance={EComponentAppearance.DARK}
          cursorHover
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Detalles
          </Text>
        )}
      </StyledContainerIcon>
      {showModal && data && (
        <DetailsPositionsModal
          infoData={data}
          labels={labelsOptions}
          dataTable={dataTable ?? []}
          onClose={handleToggleModal}
          smallScreen={screenTablet}
        />
      )}
    </>
  );
};

export { DetailsModal };
