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
  inube,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IServerDomain } from "@ptypes/IServerDomain";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { ILabel } from "@ptypes/details/ILabel";
import { enviroment } from "@config/environment";
import { IEntry } from "@ptypes/table/IEntry";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { TraceabilitySection } from "../traceabilitySection";
import { BorderStack } from "../borderStack";

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
  request: string;
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
  request,
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
      <BorderStack
        direction="column"
        height="100%"
        padding={basic.spacing.s300}
        background={inube.palette.neutral.N0}
        gap={basic.spacing.s300}
        borderRadius={basic.spacing.s8}
      >
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
              <Icon appearance={ComponentAppearance.DARK} icon={<MdClear />} />
            }
          >
            {!isMobile && "Cerrar"}
          </Button>
        </Stack>
        <Divider />

        <BorderStack
          direction="column"
          gap={basic.spacing.s200}
          alignItems="center"
          background={inube.palette.neutral.N0}
          border={`1px solid ${inube.palette.neutral.N30}`}
          borderRadius={basic.spacing.s8}
          padding={basic.spacing.s200}
        >
          <Text type="label" size="large" weight="bold">
            {request}
          </Text>

          <Divider dashed />
          <Grid templateColumns="1fr 1fr" gap={basic.spacing.s300} width="100%">
            {labelsData.map(
              (field) =>
                data[field.id] && (
                  <BorderStack
                    direction="column"
                    gap={basic.spacing.s4}
                    background={inube.palette.neutral.N10}
                    border={`1px solid ${inube.palette.neutral.N30}`}
                    borderRadius={basic.spacing.s8}
                    padding={`${basic.spacing.s075} ${basic.spacing.s150} ${basic.spacing.s075}
                    ${basic.spacing.s150}`}
                    key={field.id}
                  >
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
                  </BorderStack>
                )
            )}
          </Grid>
          <Text type="label" size="large" weight="bold">
            Trazabilidad
          </Text>

          <TraceabilitySection
            labelsOfTraceability={labelsOfTraceability}
            labelsOfTraceabilityDate={labelsOfTraceabilityDate}
            dataTraceability={data.configurationRequestsTraceability}
            dateOptions={dateOptions}
            dateSelected={dateSelected}
            onChange={onChange}
            infoData={infoData}
          />
        </BorderStack>
        <Stack gap={basic.spacing.s250} justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={ComponentAppearance.PRIMARY}
            variant="filled"
            onClick={onCloseModal}
          >
            Cerrar
          </Button>
        </Stack>
      </BorderStack>
    </Blanket>,
    node
  );
};

export { DetailsRequestsInProgressModal };
export type { IDetailsRequestsInProgressModal };
