import { inube } from "@inubekit/inubekit";

const UseBorderColor = (
  disabled: boolean,
  $readonly: boolean | undefined,
  $status: string | undefined,
  $focused: boolean
) => {

  if (disabled) {
    return inube.palette.neutral.N20 + "; pointer-events: none; opacity: 0.5;";
  }
  if ($focused && !$readonly) {
    return inube.palette.blue.B300;
  }
  if ($status === "invalid" && !$readonly) {
    return inube.palette.red.R400;
  }
  return inube.palette.neutral.N40;
};

export { UseBorderColor };
