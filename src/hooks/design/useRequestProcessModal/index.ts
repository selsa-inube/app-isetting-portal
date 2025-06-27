import { useState, useEffect } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

const UseRequestProcessModal = (portalId: string) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
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

export { UseRequestProcessModal };
