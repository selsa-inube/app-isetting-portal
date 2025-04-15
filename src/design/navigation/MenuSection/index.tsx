import { Stack } from "@inubekit/inubekit";
import { Divider } from "@design/layout/Divider";
import { basic } from "@design/tokens";
import { IMenuSection } from "@ptypes/navigation/IMenuSection";

const MenuSection = (props: IMenuSection) => {
  const { children, spacing = "wide", divider = false } = props;

  return (
    <Stack width="312px" direction="column">
      {divider && (
        <Stack
          width="280px"
          margin={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s16}`}
          direction="column"
        >
          <Divider />
        </Stack>
      )}

      <Stack
        direction="column"
        gap={
          spacing === "compact"
            ? `{${basic.spacing.s4}}`
            : `{${basic.spacing.s0}}`
        }
        margin={`${basic.spacing.s6} ${basic.spacing.s0}`}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export { MenuSection };
export type { IMenuSection };
