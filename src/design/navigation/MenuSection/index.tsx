import { Stack } from "@inubekit/inubekit";
import { Divider } from "@design/layout/Divider";
import { basic } from "@design/tokens";
import { MenuHeading } from "../MenuHeading";
import { ISection } from "@ptypes/navigation/menuSection/ISection";
import { MenuItemSpacingType } from "@ptypes/navigation/menuItem/ImenuItemSpacing";

import { MenuItem } from "../MenuItem";

interface IMenuSection {
  sections: ISection[];
  spacing?: MenuItemSpacingType;
  divider?: boolean;
}

const MenuSection = ({
  sections,
  spacing = "wide",
  divider = false,
}: IMenuSection) => {
  return (
    <>
      {sections.map((section, index) => (
        <Stack key={index} width="312px" direction="column">
          {divider && (
            <Stack
              key={index}
              width="280px"
              margin={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s16}`}
              direction="column"
            >
              <Divider />
            </Stack>
          )}

          {section.title && <MenuHeading title={section.title} />}
          <Stack
            direction="column"
            gap={
              spacing === "compact"
                ? `{${basic.spacing.s4}}`
                : `{${basic.spacing.s0}}`
            }
            margin={`${basic.spacing.s6} ${basic.spacing.s0}`}
          >
            {section.links.map((link, linkIndex) => (
              <MenuItem
                key={linkIndex}
                title={link.title}
                description={link.description}
                iconBefore={link.iconBefore}
                iconAfter={link.iconAfter}
                isDisabled={link.isDisabled}
                path={link.path}
                onClick={link.onClick}
                spacing={spacing}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </>
  );
};

export { MenuSection };
export type { IMenuSection };
