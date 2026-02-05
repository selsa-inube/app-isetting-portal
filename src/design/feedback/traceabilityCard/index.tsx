import { Stack } from "@inubekit/inubekit";
import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { ITraceabilityCard } from "@ptypes/traceabilityCard/ITraceabilityCard";
import { RenderDetailBox } from "./renderDetailBox";
import { EComponentAppearance } from "@enum/appearances";

const TraceabilityCard = (props: ITraceabilityCard) => {
  const { data, labels, isMobile } = props;
  const partLabels = labels.length;
  const firstDetail = labels.slice(0, 1).filter((field) => data[field.id]);
  const secondDetail = labels.slice(1, 2).filter((field) => data[field.id]);
  const remainingDetails = labels
    .slice(2, partLabels)
    .filter((field) => data[field.id]);

  return (
    <BorderStack
      direction="column"
      background={EComponentAppearance.LIGHT}
      border={EComponentAppearance.DARK}
      width={isMobile ? "244px" : "400px"}
      height="auto"
      borderRadius={basic.spacing.s100}
      padding={isMobile ? basic.spacing.s150 : basic.spacing.s200}
      gap={isMobile ? basic.spacing.s050 : basic.spacing.s150}
      boxSizing="border-box"
      boxShadow={EComponentAppearance.DARK}
    >
      <Stack
        gap={basic.spacing.s100}
        justifyContent="center"
        direction={isMobile ? "column" : "row"}
      >
        {firstDetail.map((field, id) => (
          <RenderDetailBox
            key={id}
            field={field}
            id={id}
            data={data}
            isMobile={isMobile}
          />
        ))}
        {secondDetail.map((field, id) => (
          <RenderDetailBox
            key={id}
            field={field}
            id={id}
            data={data}
            isMobile={isMobile}
            withTag
          />
        ))}
      </Stack>

      <Stack
        gap={basic.spacing.s200}
        direction="column"
        justifyContent="center"
      >
        {remainingDetails.map((field, id) => (
          <RenderDetailBox
            key={id}
            field={field}
            id={id}
            data={data}
            isMobile={isMobile}
          />
        ))}
      </Stack>
    </BorderStack>
  );
};

export { TraceabilityCard };
export type { ITraceabilityCard };
