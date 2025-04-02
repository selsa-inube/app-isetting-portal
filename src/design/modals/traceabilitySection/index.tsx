import { Text, Stack, useMediaQuery } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { ILabel } from "@ptypes/details/ILabel";
import { IEntry } from "@ptypes/table/IEntry";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IServerDomain } from "@ptypes/IServerDomain";
import {
  StyledContainerDataTraceability,
  StyledContainerDataTraceabilitydos,
  StyledModalTraceability,
} from "./styles";

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
  dateSelected: string;
  dateOptions?: IServerDomain[];
  onChange: (name: string, value: string) => void;
  infoData: IPosition;
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

export { TraceabilitySection };
