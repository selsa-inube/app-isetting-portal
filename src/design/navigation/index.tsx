import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { Stack } from "@inubekit/inubekit";
import { StyledMenu, StyledMenuContainer } from "./styles";
import { IOption } from "./types";
import { MenuLink } from "./MenuLink";
import { MenuOption } from "./MenuOption";

interface IMenu {
  options: IOption[];
  handleClose: () => void;
}

const renderMenuItems = (options: IOption[]) => {
  return options.map((option) => {
    if (option.path) {
      return (
        <MenuLink
          label={option.label}
          key={option.id}
          icon={option.icon}
          path={option.path}
        />
      );
    }
    if (option.handleClick) {
      return (
        <MenuOption
          label={option.label}
          key={option.id}
          icon={option.icon}
          handleClick={option.handleClick}
        />
      );
    }
    return null;
  });
};

const Menu = ({ options, handleClose }: IMenu) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleWindowClick = useCallback(
    (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleWindowClick);

    return () => {
      window.removeEventListener("mousedown", handleWindowClick);
    };
  }, [handleWindowClick]);

  return (
    <StyledMenu ref={mobileMenuRef}>
      <StyledMenuContainer>
        <Stack direction="column">{renderMenuItems(options)}</Stack>
      </StyledMenuContainer>
    </StyledMenu>
  );
};

export { Menu };
export type { IMenu };
