import { inube } from "@inubekit/inubekit";
import { IUseInputColor } from "@ptypes/hooks/IUseInputColor";

const useInputColor = (props: IUseInputColor ) => {

  const {disabled} = props;
  if (disabled) {
    return inube.palette.neutral.N20;
  }
  return inube.palette.neutral.N900;
};

export { useInputColor };
