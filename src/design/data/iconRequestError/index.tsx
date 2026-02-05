import { MdOutlineWarning } from "react-icons/md";
import { Stack, Text } from "@inubekit/inubekit";

import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { requestError } from "@config/status/requestError";
import { IIconRequestError } from "@ptypes/design/IIconRequestError";
import { IconWithText } from "../iconWithText";

const IconRequestError = (props: IIconRequestError) => {
  const { status, settingRequestError } = props;

  return (
    <Stack width="100%">
      {settingRequestError === undefined ? (
        <Stack width="100%" justifyContent="center">
          <Text size="small" textAlign="end">
            {status}
          </Text>
        </Stack>
      ) : (
        <Stack width="100%" justifyContent="center">
          <IconWithText
            withIconAfter
            icon={<MdOutlineWarning />}
            text={requestError}
            sizeIcon="16px"
            sizeMobileIcon="16px"
            appearanceIcon={EComponentAppearance.WARNING}
            gapContainer={basic.spacing.s0}
          />
        </Stack>
      )}
    </Stack>
  );
};

export { IconRequestError };
