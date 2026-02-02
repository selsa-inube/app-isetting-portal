import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text } from "@inubekit/inubekit";
import { useDetailsModal } from "@hooks/positions/useDetailsModal";
import { IDetailsModal } from "@ptypes/positions/details/IDetailsModal";
import { StyledContainerIcon } from "./styles";
import { DetailsMissionModal } from "./detailsMissionModal";
import { EComponentAppearance } from "@enum/appearances";

const DetailsModal = (props: IDetailsModal) => {
  const { data, title, labelsOptions } = props;
  const { handleToggleModal, screenTablet, showDetailsMission } =
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
            {title}
          </Text>
        )}
      </StyledContainerIcon>
      {showDetailsMission && (
        <DetailsMissionModal
          infoData={data ?? {}}
          labels={labelsOptions}
          onClose={handleToggleModal}
          smallScreen={screenTablet}
        />
      )}
    </>
  );
};

export { DetailsModal };
