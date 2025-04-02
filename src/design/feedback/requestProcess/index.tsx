import { MdCancel, MdCheckCircle } from "react-icons/md";
import { Stack, Icon, IIconAppearance, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
import { StyledBar, StyledContainerBar } from "./styles";
import { countVerifiedRequests, verifiedErrorRequest } from "./utils";

interface IRequestProcess {
  appearance: IIconAppearance;
  requestSteps: IRequestSteps[];
  isMobile: boolean;
  title: string;
  description: string;
  sizeIcon?: string;
}

const RequestProcess = (props: IRequestProcess) => {
  const {
    appearance,
    sizeIcon = "32px",
    requestSteps,
    isMobile,
    description,
    title,
  } = props;
  return (
    <Stack direction="column" gap={basic.spacing.s100} width="100%">
      <Stack direction="column" gap={basic.spacing.s300}>
        <Text type="title" size="small" weight="bold">
          {title}
        </Text>
      </Stack>
      <Stack
        gap={basic.spacing.s100}
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={
          isMobile
            ? `${basic.spacing.s100}`
            : `${basic.spacing.s0} ${basic.spacing.s150} ${basic.spacing.s250} ${basic.spacing.s450}`
        }
      >
        <Text size="medium">{description}</Text>
      </Stack>

      <Stack
        direction="column"
        gap={basic.spacing.s100}
        padding={`${basic.spacing.s0} ${basic.spacing.s350}`}
      >
        <Stack
          justifyContent={
            requestSteps.length === 1 ? "center" : "space-between"
          }
          padding={`${basic.spacing.s0} ${basic.spacing.s100}`}
        >
          {requestSteps &&
            requestSteps.length > 0 &&
            requestSteps.map((item, index) =>
              item.status === "error" ? (
                <Icon
                  key={index}
                  icon={<MdCancel />}
                  size={sizeIcon}
                  appearance={ComponentAppearance.DANGER}
                />
              ) : (
                <Icon
                  key={index}
                  icon={<MdCheckCircle />}
                  size={sizeIcon}
                  appearance={
                    item.status === "pending"
                      ? ComponentAppearance.GRAY
                      : appearance
                  }
                />
              )
            )}
        </Stack>

        <Stack
          padding={`${basic.spacing.s0} ${basic.spacing.s300}`}
          justifyContent="center"
        >
          {requestSteps && requestSteps.length > 1 && (
            <StyledContainerBar>
              <StyledBar
                $progress={countVerifiedRequests(requestSteps)}
                $statusError={verifiedErrorRequest(requestSteps)}
              />
            </StyledContainerBar>
          )}
        </Stack>
        <Stack
          justifyContent={
            requestSteps.length === 1 ? "center" : "space-between"
          }
        >
          {requestSteps &&
            requestSteps.length > 0 &&
            requestSteps.map((item, index) => (
              <Stack key={index} width="58px">
                <Text
                  type="label"
                  textAlign="center"
                  size={isMobile ? "medium" : "large"}
                  weight="bold"
                  appearance={
                    item.status === "completed"
                      ? ComponentAppearance.DARK
                      : ComponentAppearance.GRAY
                  }
                >
                  {item.name}
                </Text>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { RequestProcess };
export type { IRequestProcess };
