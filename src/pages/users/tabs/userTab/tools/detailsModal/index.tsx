import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Stack, Text } from "@inubekit/inubekit";
import { useDetailsModal } from "@hooks/users/useDetailsModal";

import { basic } from "@design/tokens";
import { DetailsUsersModal } from "./detailsUsersModal";
import { UserbuttonText } from "@config/users/addUsers/assisted/buttonText";
import { EComponentAppearance } from "@enum/appearances";
import { IDetailsUserModal } from "@ptypes/users/tabs/userTab/details/IDetailsModal";

const DetailsModal = (props: IDetailsUserModal) => {
  const { data, labelsOptions } = props;
  const {
    showModal,
    handleToggleModal,
    screenTablet,
    positionsByBusinessUnitRoles,
    rolesByBusinessUnit,
  } = useDetailsModal({ data });
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
          <Text type="body" size="medium">
            {UserbuttonText.textDetails}
          </Text>
        )}
      </Stack>
      {showModal && (
        <DetailsUsersModal
          onClose={handleToggleModal}
          infoData={data || {}}
          labels={labelsOptions}
          positionsByBusinessUnitRoles={positionsByBusinessUnitRoles ?? []}
          rolesByBusinessUnit={rolesByBusinessUnit ?? []}
          smallScreen={screenTablet}
        />
      )}
    </>
  );
};

export { DetailsModal };
