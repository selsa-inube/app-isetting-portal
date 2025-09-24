import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Stack, Text } from "@inubekit/inubekit";
import { useDetailsModal } from "@hooks/users/useDetailsModal";
import { IDetailsModal } from "@ptypes/positions/details/IDetailsModal";
import { basic } from "@design/tokens";
import { DetailsUsersModal } from "./detailsUsersModal";
import { UserbuttonText } from "@config/users/addUsers/assisted/buttonText";
import { EComponentAppearance } from "@enum/appearances";

const DetailsModal = (props: IDetailsModal) => {
  const { data, labelsOptions } = props;
  const { showModal, handleToggleModal, screenTablet, dataTable } =
    useDetailsModal({ data });

  return (
    <>
      <Stack gap={basic.spacing.s8} justifyContent="center">
        <Icon
          icon={<MdOutlineRemoveRedEye />}
          size="16px"
          appearance={EComponentAppearance.DARK}
          cursorHover
          onClick={handleToggleModal}
        />
        {screenTablet && (
          <Text type="body" size="medium" onClick={handleToggleModal}>
            {UserbuttonText.textDetails}
          </Text>
        )}
      </Stack>
      {showModal && data && (
        <DetailsUsersModal
          onClose={handleToggleModal}
          infoData={data}
          labels={labelsOptions}
          dataTable={dataTable ?? []}
          smallScreen={screenTablet}
        />
      )}
    </>
  );
};

export { DetailsModal };
