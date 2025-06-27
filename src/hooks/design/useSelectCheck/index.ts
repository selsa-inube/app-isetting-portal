import { inube } from "@inubekit/inubekit";

const UseInputColor = (disabled: boolean | undefined) => {
  if (disabled) {
    return inube.palette.neutral.N20;
  }
  return inube.palette.neutral.N900;
};

export { UseInputColor };
