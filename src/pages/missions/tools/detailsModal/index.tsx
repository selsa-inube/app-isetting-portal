import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text } from "@inubekit/inubekit";
import { UseDetailsModal } from "@hooks/positions/useDetailsModal";
import { IDetailsModal } from "@ptypes/positions/details/IDetailsModal";
import { StyledContainerIcon } from "./styles";
import { DetailsMissionModal } from "./detailsMissionModal";

const DetailsModal = (props: IDetailsModal) => {
  const { data, title, labelsOptions } = props;
  const { handleToggleModal, screenTablet, showDetailsMission } =
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
