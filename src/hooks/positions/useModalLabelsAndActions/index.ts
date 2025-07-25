import { useMemo } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { IUseModalLabelsAndActions } from "@ptypes/hooks/IUseModalLabelsAndActions";

const useModalLabelsAndActions = ( props: IUseModalLabelsAndActions ) => {

  const {labels, actions } = props;
  const hasLabels = useMemo(() => labels.length > 0, [labels]);
  const hasActions = useMemo(() => (actions?.length ?? 0) > 0, [actions]);
  const isMobile = useMediaQuery("(max-width: 990px)");
  return { hasLabels, hasActions, isMobile };
};

export { useModalLabelsAndActions };
