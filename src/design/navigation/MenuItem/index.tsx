import { IRenderMenuItems } from "@ptypes/navigation/IRenderMenuItems";
import { MenuLink } from "../MenuLink";
import { MenuOption } from "../MenuOption";

const RenderMenuItems = (props: IRenderMenuItems) => {
  const { options } = props;
  return (
    <>
      {options.map((option) => {
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
      })}
    </>
  );
};

export { RenderMenuItems };
