import { useState, useEffect } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { IUseRequestProcessModal } from "@ptypes/hooks/IUseRequestProcessModal";
import { enviroment } from "@config/environment";

const useRequestProcessModal = (props: IUseRequestProcessModal) => {
  const { portalId } = props;
  const isMobile = useMediaQuery(enviroment.IS_MOBILE_849);
  const [node, setNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portalNode = document.getElementById(portalId);
    if (portalNode) {
      setNode(portalNode);
    } else {
      throw new Error(
        "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
      );
    }
  }, [portalId]);

  return { isMobile, node };
};

export { useRequestProcessModal };
