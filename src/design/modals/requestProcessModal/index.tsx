import { createPortal } from "react-dom";
import { basic } from "@design/tokens";
import { Blanket, Stack, useMediaQuery } from "@inubekit/inubekit";
import { IRequestProcessModal } from "@ptypes/IRequestProcessModal";
import { StyledModal } from "./styles";
import { ContentHandler } from "./contentHandler";
import { LoadingContent } from "./loadingContent";

const RequestProcessModal = (props: IRequestProcessModal) => {
  const { portalId, loading, ...restProps } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");
  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={basic.spacing.s300}>
          {loading ? (
            <LoadingContent />
          ) : (
            <ContentHandler {...restProps} isMobile={isMobile} />
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { RequestProcessModal };
export type { IRequestProcessModal };
