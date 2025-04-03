import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Text,
  Stack,
  Blanket,
  Button,
  Divider,
  useMediaQuery,
  Icon,
  Grid,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IServerDomain } from "@ptypes/IServerDomain";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { ILabel } from "@ptypes/details/ILabel";
import { enviroment } from "@config/environment";
import { IEntry } from "@ptypes/table/IEntry";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import {
  StyledContainerData,
  StyledModal,
  StyledModalConatiner,
} from "./styles";
import { TraceabilitySection } from "../traceabilitySection";

interface IDetailsRequestsInProgressModal {
  data: IEntry;
  labelsOfTraceability: ILabel[];
  labelsOfTraceabilityDate: ILabel[];
  labelsData: ILabel[];
  portalId: string;
  onCloseModal: () => void;
  title: string;
  dateOptions?: IServerDomain[];
  dateSelected: string;
  onChange: (name: string, value: string) => void;
  infoData: IPosition;
}

const DetailsRequestsInProgressModal = ({
  data,
  portalId,
  labelsOfTraceability,
  labelsOfTraceabilityDate,
  labelsData,
  onCloseModal,
  title,
  dateOptions,
  dateSelected,
  onChange,
  infoData,
}: IDetailsRequestsInProgressModal) => {
  const isMobile = useMediaQuery(enviroment.MEDIA_QUERY_MOBILE);
  const node = document.getElementById(portalId);
  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }
  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={basic.spacing.s200}>
          <Stack direction="column" gap={basic.spacing.s300}>
            <Stack alignItems="center" justifyContent="space-between">
              <Text type="headline" size="small" appearance="dark">
                {title}
              </Text>

              <Button
                spacing="compact"
                appearance={ComponentAppearance.DARK}
                variant="none"
                onClick={onCloseModal}
                iconAfter={
                  <Icon
                    appearance={ComponentAppearance.DARK}
                    icon={<MdClear />}
                  />
                }
              >
                Cerrar
              </Button>
            </Stack>
            <Divider />
          </Stack>
        </Stack>
        <StyledModalConatiner>
          <Stack
            gap={basic.spacing.s100}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text type="label" size="large" weight="bold">
              {data.request}
            </Text>
          </Stack>
          <Divider dashed />
          <Grid templateColumns="1fr 1fr" gap={basic.spacing.s300} width="100%">
            {labelsData.map(
              (field) =>
                data[field.id] && (
                  <StyledContainerData key={field.id}>
                    <Text size="medium" type="label">
                      {field.titleName}
                    </Text>
                    <Text
                      size="small"
                      type="body"
                      appearance={ComponentAppearance.GRAY}
                    >
                      {data[field.id]}
                    </Text>
                  </StyledContainerData>
                )
            )}
          </Grid>
          <Text type="label" size="large" weight="bold">
            Trazabilidad
          </Text>
          <Stack
            gap={basic.spacing.s250}
            direction="column"
            justifyContent="center"
          >
            <TraceabilitySection
              labelsOfTraceability={labelsOfTraceability}
              labelsOfTraceabilityDate={labelsOfTraceabilityDate}
              dataTraceability={data.configurationRequestsTraceability}
              dateOptions={dateOptions}
              dateSelected={dateSelected}
              onChange={onChange}
              infoData={infoData}
            />
          </Stack>
        </StyledModalConatiner>
        <Stack gap={basic.spacing.s250} justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={ComponentAppearance.LIGHT}
            variant="filled"
            onClick={onCloseModal}
          >
            Cerrar
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { DetailsRequestsInProgressModal };
export type { IDetailsRequestsInProgressModal };
