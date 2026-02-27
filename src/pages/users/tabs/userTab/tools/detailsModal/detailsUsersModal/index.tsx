import { InteractiveModal } from "@design/feedback/InteractiveModal";
import { basic } from "@design/tokens";
import { Divider, Stack, Text } from "@inubekit/inubekit";
import { IFeedbackModal } from "@ptypes/users/tabs/userTab/details/IFeedbackModal";
import { InputFields } from "./inputFields";

import { EComponentAppearance } from "@enum/appearances";
import { BorderStack } from "@design/layout/borderStack";
import { userDetails } from "@config/users/detailsUsers";
import { TableUsers } from "./tableUsers";

const DetailsUsersModal = (props: IFeedbackModal) => {
  const {
    onClose,
    smallScreen,
    labels,
    infoData,

    positionsByBusinessUnitRoles,
    rolesByBusinessUnit,
  } = props;
  return (
    <InteractiveModal
      closeModal={onClose}
      portalId="portal"
      title="Detalles del usuario"
      infoText="Cerrar"
      width={smallScreen ? "100%" : "700px"}
      height="750px"
    >
      <BorderStack
        overflowY="scroll"
        direction="column"
        gap={basic.spacing.s24}
      >
        <InputFields labels={labels} infoData={infoData} />

        <Stack direction="column" gap={basic.spacing.s16}>
          {positionsByBusinessUnitRoles && (
            <BorderStack
              border={EComponentAppearance.DARK}
              borderRadius="5px"
              direction="column"
              padding={basic.spacing.s200}
              gap={basic.spacing.s200}
            >
              <Text
                type="title"
                size="medium"
                appearance={EComponentAppearance.GRAY}
                weight="bold"
              >
                {userDetails.rolesByBusinessUnit}
              </Text>
              <Divider dashed />
              <TableUsers dataTable={positionsByBusinessUnitRoles} />
            </BorderStack>
          )}

          {rolesByBusinessUnit && (
            <BorderStack
              border={EComponentAppearance.DARK}
              borderRadius="5px"
              direction="column"
              padding={basic.spacing.s200}
              gap={basic.spacing.s200}
            >
              <Text
                type="title"
                size="medium"
                appearance={EComponentAppearance.GRAY}
                weight="bold"
              >
                {userDetails.positionsByBusinessUnitRoles}
              </Text>
              <Divider dashed />
              <TableUsers dataTable={rolesByBusinessUnit} />
            </BorderStack>
          )}
        </Stack>
      </BorderStack>
    </InteractiveModal>
  );
};

export { DetailsUsersModal };
