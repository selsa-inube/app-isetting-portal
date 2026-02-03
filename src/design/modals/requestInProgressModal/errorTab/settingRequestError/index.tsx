import { MdCalendarMonth, MdOutlineErrorOutline } from "react-icons/md";
import { Grid, Icon, Stack, Text } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { formatDateTable } from "@utils/date/formatDateTable";
import { EComponentAppearance } from "@enum/appearances";
import { BorderStack } from "@design/layout/borderStack";
import { ISettingRequestError } from "@ptypes/requestsInProgress/ISettingRequestError";

const SettingError = (props: ISettingRequestError) => {
  const { errorDescription, settingRequestId, errorDate } = props;

  const normalizeDate = formatDateTable(new Date(String(errorDate)), true);

  return (
    <BorderStack
      key={settingRequestId}
      direction="column"
      background={EComponentAppearance.DANGER}
      borderRadius={basic.spacing.s100}
      border={EComponentAppearance.DANGER}
      boxSizing="border-box"
      width="100%"
      height="auto"
      gap={basic.spacing.s200}
      padding={basic.spacing.s150}
    >
      <Grid templateColumns="1fr auto" width="100%" alignItems="center">
        <Stack gap={basic.spacing.s050} direction="column">
          <Stack gap={basic.spacing.s100}>
            <Icon
              icon={<MdCalendarMonth />}
              size="16px"
              appearance={EComponentAppearance.DARK}
            />
            <Text type="label" size="large" weight="bold">
              {normalizeDate}
            </Text>
          </Stack>
          <Stack padding={basic.spacing.s050}>
            <Text size="medium" appearance={EComponentAppearance.GRAY}>
              {errorDescription}
            </Text>
          </Stack>
        </Stack>

        <Icon
          icon={<MdOutlineErrorOutline />}
          size="16px"
          appearance={EComponentAppearance.DANGER}
        />
      </Grid>
    </BorderStack>
  );
};

export { SettingError };
