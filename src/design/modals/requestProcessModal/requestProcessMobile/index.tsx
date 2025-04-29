import { MdCancel, MdCheckCircle } from "react-icons/md";
import { Icon, ProgressBar, Stack, Text } from "@inubekit/inubekit";

import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { verifiedErrorRequest } from "@utils/verifiedErrorRequest";
import { countVerifiedRequests } from "@utils/countVerifiedRequests";
import { IRequestProcessMobile } from "@ptypes/requestsInProgress/IRequestProcessMobile";
import { StyledContainerProgressBar } from "../styles";

const RequestProcessMobile = (props: IRequestProcessMobile) => {
  const { requestSteps, sizeIcon, appearance } = props;
  const hasMultipleSteps = requestSteps && requestSteps.length > 1;
  const hasSteps = requestSteps && requestSteps.length > 0;
  return (
    <Stack direction="column" gap={basic.spacing.s100}>
      <Stack
        justifyContent={requestSteps.length === 1 ? "center" : "space-between"}
        padding={`${basic.spacing.s0} ${basic.spacing.s150}`}
      >
        {hasSteps &&
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
        justifyContent="center"
        padding={`${basic.spacing.s100} ${basic.spacing.s0}`}
      >
        {hasMultipleSteps && (
          <StyledContainerProgressBar
            $appearance={ComponentAppearance.GRAY}
            $height="8px"
          >
            <ProgressBar
              height="8px"
              appearance={
                verifiedErrorRequest(requestSteps)
                  ? ComponentAppearance.DANGER
                  : ComponentAppearance.SUCCESS
              }
              progress={countVerifiedRequests(requestSteps)}
            />
          </StyledContainerProgressBar>
        )}
      </Stack>
      <Stack
        justifyContent={requestSteps.length === 1 ? "center" : "space-between"}
      >
        {hasSteps &&
          requestSteps.map((item, index) => (
            <Stack key={index} width="58px">
              <Text
                type="label"
                textAlign="center"
                size="medium"
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
  );
};

export { RequestProcessMobile };
