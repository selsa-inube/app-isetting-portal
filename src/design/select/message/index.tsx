import { MdOutlineError, MdCheckCircle } from "react-icons/md";
import { basic } from "@design/tokens";
import { Icon, Stack, Text } from "@inubekit/inubekit";
import { ISelectCheck } from "@ptypes/navigation/ISelectCheck";

const Message = (
  props: Pick<ISelectCheck, "disabled" | "status"> & { message?: string }
) => {
  const { disabled, status, message } = props;

  return (
    status !== "pending" && (
      <Stack
        alignItems="center"
        gap={basic.spacing.s4}
        margin={`${basic.spacing.s4} ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s16}`}
      >
        <Icon
          appearance={status === "invalid" ? "danger" : "success"}
          disabled={disabled}
          icon={status === "invalid" ? <MdOutlineError /> : <MdCheckCircle />}
          size="14px"
        />
        <Text
          type="body"
          size="small"
          appearance={status === "invalid" ? "danger" : "success"}
          disabled={disabled}
        >
          {message && `${message}`}
        </Text>
      </Stack>
    )
  );
};
export { Message };
