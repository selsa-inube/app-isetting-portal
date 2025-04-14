import { Stack, Text } from "@inubekit/inubekit";
import { TraceabilityCard } from "@design/feedback/traceabilityCard";
import { basic } from "@design/tokens";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { ITraceabilitySection } from "@ptypes/requestsInProgress/ITraceabilitySection";

const TraceabilitySection = (props: ITraceabilitySection) => {
  const { traceability, isMobile, labels } = props;
  return (
    <Stack
      margin={`${basic.spacing.s075} ${basic.spacing.s0}`}
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      gap={basic.spacing.s150}
    >
      <Text type="label" size="large" weight="bold">
        {detailsRequestInProgressModal.labelsTraceability}
      </Text>

      <Stack direction="column" gap={basic.spacing.s150} alignItems="center">
        {traceability.map((entry, index) => (
          <TraceabilityCard
            key={index}
            data={entry}
            isMobile={isMobile}
            labels={labels}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default TraceabilitySection;
