import { useEffect, useRef, useCallback } from "react";
import { Stack } from "@inubekit/inubekit";
import { IMenu } from "@ptypes/navigation/IMenu";
import { StyledMenu, StyledMenuContainer } from "./styles";
import { RenderMenuItems } from "./MenuItem";

const Menu = (props: IMenu) => {
  const { options, handleClose } = props;
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
        <Stack direction="column">
          <RenderMenuItems options={options} />
        </Stack>
      </StyledMenuContainer>
    </StyledMenu>
  );
};

export { Menu };
export type { IMenu };
