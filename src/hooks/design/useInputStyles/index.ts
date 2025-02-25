import { useTheme } from "styled-components";
import { inube } from "@inubekit/inubekit";

const UseBorderColor = (
  disabled: boolean,
  $readonly: boolean | undefined,
  $status: string | undefined,
  $focused: boolean
) => {
  const theme = useTheme();

  if (disabled) {
    return (
      (theme?.palette?.neutral?.N20 || inube.palette.neutral.N20) +
      "; pointer-events: none; opacity: 0.5;"
    );
  }
  if ($focused && !$readonly) {
    return theme?.palette?.blue?.B300 || inube.palette.blue.B300;
  }
  if ($status === "invalid" && !$readonly) {
    return theme?.palette?.red?.R400 || inube.palette.red.R400;
  }
  return theme?.palette?.neutral?.N40 || inube.palette.neutral.N40;
};

export { UseBorderColor };
