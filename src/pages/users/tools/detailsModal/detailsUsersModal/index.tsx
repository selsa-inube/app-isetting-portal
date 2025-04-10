import { InteractiveModal } from "@design/feedback/InteractiveModal";
import { basic } from "@design/tokens";
import { Grid, Stack } from "@inubekit/inubekit";
import { IFeedbackModal } from "@ptypes/users/details/IFeedbackModal";
import { InputFields } from "./inputFields";
import { TableUsers } from "./tableUsers";

const DetailsUsersModal = (props: IFeedbackModal) => {
  const { onClose, smallScreen, labels, infoData, dataTable } = props;
  return (
    <InteractiveModal
      closeModal={onClose}
      portalId="portal"
      title="Detalles del usuario"
      infoText="Cerrar"
      width={smallScreen ? "100%" : "700px"}
    >
      <Grid
        templateColumns={
          smallScreen ? "auto" : "repeat(auto-fit, minmax(300px, 1fr))"
        }
        gap={basic.spacing.s16}
        autoRows="auto"
        justifyContent="normal"
      >
        <InputFields labels={labels} infoData={infoData} />
      </Grid>

      <Stack direction="column" gap={basic.spacing.s16}>
        {dataTable && <TableUsers dataTable={dataTable} />}
      </Stack>
    </InteractiveModal>
  );
};

export { DetailsUsersModal };
