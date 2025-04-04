import { Divider, inube, Stack, Text } from "@inubekit/inubekit";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IEntry } from "@ptypes/table/IEntry";
import { RequestType } from "src/enum/requestType";
import { TraceabilityCard } from "@design/feedback/traceabilityCard";
import { ILabel } from "@ptypes/details/ILabel";
import { BorderStack } from "@design/modals/borderStack";

interface IRequestsInProcess {
  data: IEntry;
  labelsOfRequest: ILabel[];
  labelsOfTraceability: ILabel[];
  isMobile: boolean;
  onCloseModal: () => void;
  onClick: () => void;
}

function RequestsInProcess(props: IRequestsInProcess) {
  const {
    data,
    labelsOfRequest,
    labelsOfTraceability,
    isMobile,
    onCloseModal,
    onClick,
  } = props;

  return (
    <ModalWrapper
      portalId="portal"
      width={isMobile ? "335px" : "600px"}
      isMobile={isMobile}
      title="Detalles de solicitud"
      withCancelButton={true}
      onCloseModal={onCloseModal}
      onClick={onClick}
    >
      <BorderStack
        direction="column"
        background={inube.palette.neutral.N0}
        borderRadius={basic.spacing.s100}
        border={inube.palette.neutral.N40}
        boxSizing="border-box"
        width="auto"
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
              appearance={ComponentAppearance.GRAY}
            >
              Solicitud{" "}
              {RequestType[data.request as keyof typeof RequestType] ??
                data.request}
            </Text>
            <Divider dashed />
          </Stack>
        </Stack>
        <BorderStack
          background={inube.palette.neutral.N0}
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
            {labelsOfRequest.map(
              (field, id) =>
                data[field.id] && (
                  <BorderStack
                    key={id}
                    direction="column"
                    width={isMobile ? "253px" : "240px"}
                    height="52px"
                    background={inube.palette.neutral.N10}
                    borderRadius={basic.spacing.s100}
                    border={inube.palette.neutral.N40}
                    boxSizing="border-box"
                    padding={`${basic.spacing.s075} ${basic.spacing.s150}`}
                  >
                    <Text size="medium" type="label" weight="bold">
                      {field.titleName}
                    </Text>
                    <Text
                      size="small"
                      appearance={ComponentAppearance.GRAY}
                      ellipsis
                    >
                      {data[field.id]}
                    </Text>
                  </BorderStack>
                )
            )}
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
              Trazabilidad
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
}

export { RequestsInProcess };
export type { IRequestsInProcess };
