import { MdInfoOutline } from "react-icons/md";
import { Icon, Stack, Text } from "@inubekit/inubekit";

import { StyledMenuItemLink } from "./styles";
import { basic } from "@design/tokens";
import { IMenuItem } from "@ptypes/design/IMenuItem";
import { BorderStack } from "@design/layout/borderStack";
import { ComponentAppearance } from "@ptypes/aparences.types";

const MenuItem = (props: IMenuItem) => {
  const {
    description,
    icon,
    disabled = false,
    path = "",
    onToggleInfoModal,
    onClick = () => {},
  } = props;

  const disabledPath = disabled ? "" : path;
   return (
    <BorderStack
      justifyContent="space-between"
      alignItems="center"
      height="36px"
      width="100%"
      padding={`${basic.spacing.s100} ${basic.spacing.s150}`}
      gap={basic.spacing.s050}
      boxSizing="border-box"
    >
      <StyledMenuItemLink to={disabledPath} onClick={onClick}>
        <Stack gap={basic.spacing.s050} alignItems="center">
          <Icon
            icon={icon}
            size="18px"
            appearance={ComponentAppearance.PRIMARY}
            disabled={disabled}
          />

          <Text
            size="small"
            appearance={ComponentAppearance.DARK}
            disabled={disabled}
          >
            {description}
          </Text>

          {disabled && (
            <Icon
              icon={<MdInfoOutline />}
              size="16px"
              appearance={ComponentAppearance.PRIMARY}
              onClick={onToggleInfoModal}
            />
          )}
        </Stack>
      </StyledMenuItemLink>
     
    </BorderStack>
  );
};

export { MenuItem };
