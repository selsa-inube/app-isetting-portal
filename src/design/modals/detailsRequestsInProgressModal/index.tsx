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
import { IField } from "@ptypes/interactiveModal/IField";
import {
  StyledContainerButton,
  StyledContainerData,
  StyledContainerDataTraceability,
  StyledContainerDataTraceabilitydos,
  StyledModal,
  StyledModalConatiner,
  StyledModalTraceability,
} from "./styles";

interface IDetailsRequestsInProgressModal {
  data: IEntry;
  dataTraceability?: IEntry;
  labelsOfTraceability: ILabel[];
  labelsOfTraceabilityDate: ILabel[];
  labelsData: ILabel[];
  labels?: IField[];
  infoData: IPosition;
  portalId: string;
  dateSelected: string;
  dateOptions?: IServerDomain[];
  onCloseModal: () => void;
  title: string;
  onChange: (name: string, value: string) => void;
  onMoreDetails: () => void;
}
const renderTraceabilityFields = (
  fields: ILabel[],
  data: IEntry,
  applyRedBackground?: boolean
) =>
  Array.isArray(data)
    ? data.map((entry, entryIndex) =>
        fields
          .filter((field) => entry[field.id])
          .map((field, index) => (
            <StyledContainerDataTraceability key={`${entryIndex}-${field.id}`}>
              <Text size="medium" type="label" weight="bold">
                {field.titleName}
              </Text>
              {applyRedBackground && index === 1 ? (
                <StyledContainerDataTraceabilitydos>
                  <Text
                    size="small"
                    type="body"
                    appearance={ComponentAppearance.GRAY}
                  >
                    {entry[field.id]}
                  </Text>
                </StyledContainerDataTraceabilitydos>
              ) : (
                <Text
                  size="small"
                  type="body"
                  appearance={ComponentAppearance.GRAY}
                >
                  {entry[field.id]}
                </Text>
              )}
            </StyledContainerDataTraceability>
          ))
      )
    : null;

const TraceabilitySection = ({
  labelsOfTraceability,
  labelsOfTraceabilityDate,
  dataTraceability,
}: {
  labelsOfTraceability: ILabel[];
  labelsOfTraceabilityDate: ILabel[];
  dataTraceability: IEntry;
  data: IEntry;
}) => {
  const applyRedBackground = true;
  const smallScreen = useMediaQuery("(max-width: 532px)");
  return (
    <StyledModalTraceability $smallScreen={smallScreen}>
      <Stack
        gap={basic.spacing.s200}
        width="100%"
        direction={smallScreen ? "column" : "row"}
      >
        {renderTraceabilityFields(
          labelsOfTraceability,
          dataTraceability,
          applyRedBackground
        )}
      </Stack>
      <Stack direction="column" gap={basic.spacing.s100} width="100%">
        {renderTraceabilityFields(labelsOfTraceabilityDate, dataTraceability)}
      </Stack>
    </StyledModalTraceability>
  );
};

const DetailsRequestsInProgressModal = ({
  data,
  portalId,
  labelsOfTraceability,
  labelsOfTraceabilityDate,
  labelsData,
  onCloseModal,
  title,
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
              <StyledContainerButton>
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
              </StyledContainerButton>
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
              data={data}
              dataTraceability={data.configurationRequestsTraceability}
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
