import { createPortal } from "react-dom";
import { Stack, Text, Blanket, Divider } from "@inubekit/inubekit";
import { lastCompletedIndex } from "@utils/lastCompletedIndex";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IRequestProcessModal } from "@ptypes/requestsInProgress/IRequestProcessModal";
import { RequestProcessMobile } from "./requestProcessMobile";
import { StyledModal } from "./styles";
import { RequestProcessDesktop } from "./requestProcessDesktop";

const RequestProcessModal = (props: IRequestProcessModal) => {
  const {
    portalId,
    appearance,
    sizeIcon = "28px",
    requestSteps,
    isMobile,
    description,
    title,
  } = props;

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  const stepCurrentIndex = lastCompletedIndex(requestSteps);
  const stepCurrent = stepCurrentIndex + 1;

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={basic.spacing.s200} width="100%">
          <Stack direction="column" gap={basic.spacing.s100}>
            <Text type="title" size="medium" weight="bold">
              {title}
            </Text>
            <Divider />
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Text
              size={isMobile ? "small" : "medium"}
              appearance={ComponentAppearance.GRAY}
            >
              {description}
            </Text>
          </Stack>
          {isMobile ? (
            <RequestProcessMobile
              requestSteps={requestSteps}
              sizeIcon={sizeIcon}
              appearance={appearance}
            />
          ) : (
            <RequestProcessDesktop
              requestSteps={requestSteps}
              sizeIcon={sizeIcon}
              stepCurrent={stepCurrent}
              stepCurrentIndex={stepCurrentIndex}
            />
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { RequestProcessModal };
export type { IRequestProcessModal };
