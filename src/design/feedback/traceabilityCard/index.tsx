import { inube, Stack, Tag, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IEntry } from "@ptypes/table/IEntry";
import { ILabel } from "@ptypes/details/ILabel";
import { BorderStack } from "@design/modals/borderStack";

interface ITraceabilityCard {
  data: IEntry;
  labels: ILabel[];
  isMobile: boolean;
}

const TraceabilityCard = (props: ITraceabilityCard) => {
  const { data, labels, isMobile } = props;

  const partLabels = labels.length;

  return (
    <BorderStack
      direction="column"
      background={inube.palette.neutral.N0}
      width={isMobile ? "244px" : "400px"}
      height="auto"
      borderRadius={basic.spacing.s100}
      padding={isMobile ? `${basic.spacing.s150}` : `${basic.spacing.s200}`}
      gap={isMobile ? `${basic.spacing.s050}` : `${basic.spacing.s150}`}
      boxSizing="border-box"
      boxShadow="1px 0px 3px 1px rgba(0, 0, 0, 0.15)"
    >
      <Stack
        gap={basic.spacing.s100}
        justifyContent="center"
        direction={isMobile ? "column" : "row"}
      >
        {labels.slice(0, 1).map(
          (field, id) =>
            data[field.id] && (
              <BorderStack
                key={id}
                direction="column"
                width="100%"
                min-height="52px"
                borderRadius={basic.spacing.s100}
                padding={
                  isMobile
                    ? `${basic.spacing.s075}`
                    : `${basic.spacing.s075} ${basic.spacing.s150}`
                }
                box-sizing="border-box"
                background={inube.palette.neutral.N10}
                boxSizing="border-box"
              >
                <Text size="medium" type="label" weight="bold">
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
        {labels.slice(1, 2).map(
          (field, id) =>
            data[field.id] && (
              <BorderStack
                key={id}
                direction="column"
                width="100%"
                min-height="52px"
                borderRadius={basic.spacing.s100}
                padding={
                  isMobile
                    ? `${basic.spacing.s075}`
                    : `${basic.spacing.s075} ${basic.spacing.s150}`
                }
                box-sizing="border-box"
                background={inube.palette.neutral.N10}
                boxSizing="border-box"
              >
                <Text size="medium" type="label" weight="bold">
                  {field.titleName}
                </Text>
                <Stack width="auto">
                  <Tag
                    appearance={ComponentAppearance.GRAY}
                    label={data[field.id]}
                    weight="strong"
                  />
                </Stack>
              </BorderStack>
            )
        )}
      </Stack>

      <Stack
        gap={basic.spacing.s200}
        direction="column"
        justifyContent="center"
      >
        {labels.slice(2, partLabels).map(
          (field, id) =>
            data[field.id] && (
              <BorderStack
                key={id}
                direction="column"
                width="100%"
                min-height="52px"
                borderRadius={basic.spacing.s100}
                padding={
                  isMobile
                    ? `${basic.spacing.s075}`
                    : `${basic.spacing.s075} ${basic.spacing.s150}`
                }
                box-sizing="border-box"
                background={inube.palette.neutral.N10}
                boxSizing="border-box"
              >
                <Text size="medium" type="label" weight="bold">
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
      </Stack>
    </BorderStack>
  );
};

export { TraceabilityCard };
export type { ITraceabilityCard };
