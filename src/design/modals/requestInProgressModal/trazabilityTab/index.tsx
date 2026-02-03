import { Divider, Stack, Text } from "@inubekit/inubekit";
import { DetailBox } from "@design/feedback/detailBox";
import { TraceabilityCard } from "@design/feedback/traceabilityCard";

import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";

import { IEntry } from "@ptypes/design/table/IEntry";
import { ITrazabilityTab } from "@ptypes/design/ITrazabilityTab";
import { BorderStack } from "@design/layout/borderStack";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";

const TrazabilityTab = (props: ITrazabilityTab) => {
  const { data, title, isMobile, labelsOfRequest, labelsOfTraceability } =
    props;

  const labelsOfRequestDetails = labelsOfRequest.filter(
    (field) => data[field.id],
  );
  return (
    <Stack direction="column" gap={basic.spacing.s200}>
      <Stack gap={basic.spacing.s250} direction={isMobile ? "column" : "row"}>
        {labelsOfRequestDetails.map((field, id) => (
          <DetailBox
            key={id}
            field={field}
            data={data}
            id={id}
            borderRadius={basic.spacing.s100}
            padding={`${basic.spacing.s075} ${basic.spacing.s150}`}
            width={isMobile ? "100%" : "240px"}
            borderColor={EComponentAppearance.DARK}
            ellipsis
          />
        ))}
      </Stack>

      <BorderStack
        direction="column"
        background={EComponentAppearance.LIGHT}
        borderRadius={basic.spacing.s100}
        border={EComponentAppearance.DARK}
        boxSizing="border-box"
        width="100%"
        height={isMobile ? "400px" : "430px"}
        gap={basic.spacing.s200}
        padding={isMobile ? `${basic.spacing.s150}` : `${basic.spacing.s200}`}
      >
        <Stack
          gap={basic.spacing.s200}
          direction="column"
          alignItems="center"
          width="100%"
        >
          <Stack
            direction="column"
            justifyContent="left"
            width="100%"
            gap={basic.spacing.s100}
          >
            <Text
              type="title"
              size="medium"
              weight="bold"
              appearance={EComponentAppearance.GRAY}
            >
              {title}
            </Text>
            <Divider dashed />
          </Stack>
        </Stack>
        <BorderStack
          background={EComponentAppearance.LIGHT}
          overflowY="auto"
          boxSizing="border-box"
          wrap="wrap"
          width="100%"
          gap={isMobile ? `${basic.spacing.s075}` : `${basic.spacing.s150}`}
        >
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

            <Stack
              direction="column"
              gap={basic.spacing.s150}
              alignItems="center"
            >
              {data.traceability.map((entry: IEntry, index: number) => (
                <Stack key={index}>
                  <TraceabilityCard
                    data={entry}
                    isMobile={isMobile}
                    labels={labelsOfTraceability}
                  />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </BorderStack>
      </BorderStack>
    </Stack>
  );
};

export { TrazabilityTab };
