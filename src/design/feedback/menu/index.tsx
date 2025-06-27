import { MdOutlineClear } from "react-icons/md";
import { Icon, Stack } from "@inubekit/inubekit";
import { StyledContent } from "./styles";
import { MenuItem } from "./menuItem";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { basic } from "@design/tokens";
import { IMenu } from "@ptypes/design/IMenu";

const Menu = (props: IMenu) => {
  const { options, onToggleInfoModal, onClose } = props;

  const close: boolean = options.length > 1;

  return (
    <StyledContent $options={options.length}>
      <Stack direction="column">
        {options.map((option, index) => (
          <Stack key={index} direction="column">
            <MenuItem
              description={option.description}
              icon={option.icon}
              disabled={option.disabled}
              path={option.path}
              onToggleInfoModal={onToggleInfoModal}
              close={close}
              onClose={onClose}
            />
          </Stack>
        ))}
      </Stack>

      {!close && (
        <Stack
          justifyContent="flex-end"
          margin={`${basic.spacing.s075} ${basic.spacing.s100} ${basic.spacing.s0} ${basic.spacing.s025}`}
        >
          <Icon
            icon={<MdOutlineClear />}
            size="16px"
            appearance={ComponentAppearance.DARK}
            onClick={onClose}
            cursorHover
          />
        </Stack>
      )}
    </StyledContent>
  );
};
export { Menu };
