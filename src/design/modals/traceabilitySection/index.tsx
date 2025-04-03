import { Text, Stack, useMediaQuery, Button, inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { ILabel } from "@ptypes/details/ILabel";
import { IEntry } from "@ptypes/table/IEntry";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IServerDomain } from "@ptypes/IServerDomain";
import { BorderStack } from "../borderStack";

const renderTraceabilityFields = (
  fields: ILabel[],
  data: IEntry,
  applyBackground?: boolean
) =>
  Array.isArray(data)
    ? data.map((entry, entryIndex) =>
        fields
          .filter((field) => entry[field.id])
          .map((field, index) => (
            <BorderStack
              direction="column"
              gap={basic.spacing.s4}
              padding={basic.spacing.s150}
              boxSizing="border-box"
              width="100%"
              border={`1px solid ${inube.palette.neutral.N10}`}
              background={inube.palette.neutral.N10}
              borderRadius={basic.spacing.s8}
              key={`${entryIndex}-${field.id}`}
            >
              <Text size="medium" type="label" weight="bold">
                {field.titleName}
              </Text>
              {applyBackground && index === 1 ? (
                <Button appearance="gray">
                  <Text
                    size="small"
                    type="body"
                    appearance={ComponentAppearance.GRAY}
                  >
                    {entry[field.id]}
                  </Text>
                </Button>
              ) : (
                <Text
                  size="small"
                  type="body"
                  appearance={ComponentAppearance.GRAY}
                >
                  {entry[field.id]}
                </Text>
              )}
            </BorderStack>
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
    <BorderStack
      direction="column"
      alignItems="center"
      gap={basic.spacing.s150}
      background={inube.palette.neutral.N0}
      border={`1px solid ${inube.palette.neutral.N30}`}
      borderRadius={basic.spacing.s8}
      padding={basic.spacing.s300}
      width={smallScreen ? "auto" : "400px"}
    >
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
    </BorderStack>
  );
};

export { TraceabilitySection };
