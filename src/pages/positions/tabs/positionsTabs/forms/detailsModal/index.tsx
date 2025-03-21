import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";
import { InteractiveModal } from "@design/feedback/InteractiveModal";
import { IPosition } from "../../outlets/addPosition/types";
import { StyledContainerIcon } from "./styles";

interface IField {
  id: string;
  labelName: string;
}

interface IDetailsModalProps {
  data?: IPosition;
  labelsOptions: IField[];
}

const DetailsModal = (props: IDetailsModalProps) => {
  const { data, labelsOptions } = props;

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    handleToggleModal;
  };
  const screenTablet = useMediaQuery("(max-width: 1000px)");

  const dataTable = data?.MissionByRole.map((item: { roleName: string }) => {
    return {
      roles: item.roleName,
    };
  });

  return (
    <>
      <StyledContainerIcon onClick={handleToggleModal} $isTablet={screenTablet}>
        <Icon
          icon={<MdOutlineRemoveRedEye />}
          size="16px"
          appearance="dark"
          onClick={handleToggleModal}
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
