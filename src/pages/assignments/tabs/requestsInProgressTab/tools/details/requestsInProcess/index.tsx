import { Divider, Stack, Text } from "@inubekit/inubekit";

import { TraceabilityCard } from "@design/feedback/traceabilityCard";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { DetailBox } from "@design/feedback/detailBox";
import { IEntry } from "@ptypes/design/table/IEntry";
import { basic } from "@design/tokens";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { IRequestsInProcess } from "@ptypes/requestsInProgress/IRequestsInProcess";
import { EComponentAppearance } from "@enum/appearances";
import { BorderStack } from "@design/layout/borderStack";
import { portalId } from "@config/portalId";

const RequestsInProcess = (props: IRequestsInProcess) => {
  const {
    data,
    title,
    labelsOfRequest,
    labelsOfTraceability,
    isMobile,
    onCloseModal,
    onClick,
  } = props;

  return (
    <ModalWrapper
      portalId={portalId}
      width={isMobile ? "335px" : "600px"}
      isMobile={isMobile}
      labelActionButton={detailsRequestInProgressModal.labelActionButton}
      labelCloseButton={detailsRequestInProgressModal.labelCloseButton}
      labelCloseModal={detailsRequestInProgressModal.labelCloseModal}
      iconBeforeButton={detailsRequestInProgressModal.iconBeforeButton}
      title={detailsRequestInProgressModal.title}
      withCancelButton={true}
      onCloseModal={onCloseModal}
      onClick={onClick}
    >
      <BorderStack
        direction="column"
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
          overflowY="auto"
          boxSizing="border-box"
          wrap="wrap"
          width="100%"
          gap={isMobile ? `${basic.spacing.s075}` : `${basic.spacing.s150}`}
        >
          <Stack
            gap={basic.spacing.s250}
            direction={isMobile ? "column" : "row"}
          >
            {labelsOfRequest.map((field, id) => (
              <DetailBox
                key={id}
                field={field}
                data={data}
                id={id}
                borderRadius={basic.spacing.s100}
                padding={`${basic.spacing.s075} ${basic.spacing.s150}`}
                width={isMobile ? "253px" : "240px"}
                ellipsis
              />
            ))}
          </Stack>

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
    </ModalWrapper>
  );
};

export { RequestsInProcess };
