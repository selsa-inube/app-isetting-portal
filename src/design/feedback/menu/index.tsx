import { MdOutlineClear } from "react-icons/md";
import { Icon, Stack } from "@inubekit/inubekit";
import { StyledContent } from "./styles";
import { MenuItem } from "./menuItem";
import { EComponentAppearance } from "@enum/appearances";
import { basic } from "@design/tokens";
import { IMenu } from "@ptypes/design/IMenu";

const Menu = (props: IMenu) => {
  const { options, onToggleInfoModal, onClose } = props;

  return (
    <StyledContent $options={options.length}>
      <Stack direction="column">
        {options.map((option, index) => (
          <Stack key={index} direction="column">
            <MenuItem
              description={option.description}
              icon={option.icon}
              disabled={option.disabled}
              path={option.path ?? ""}
              onToggleInfoModal={onToggleInfoModal}
              onClick={option.onClick}
            />
          </Stack>
        ))}
      </Stack>
      <Stack
        justifyContent="flex-end"
        margin={`${basic.spacing.s075} ${basic.spacing.s100} ${basic.spacing.s0} ${basic.spacing.s025}`}
      >
        <Icon
          icon={<MdOutlineClear />}
          size="16px"
          appearance={EComponentAppearance.DARK}
          onClick={onClose}
          cursorHover
        />
      </Stack>
    </StyledContent>
  );
};
export { Menu };
