import { MdOutlineStart } from "react-icons/md";
import { ICardData } from "@ptypes/home/ICardData";
import { ILinkNav } from "@inubekit/inubekit";
const createNavLink = (
  option: ICardData,
  defaultIcon: React.ReactNode,
  location?: Location
) => ({
  id: option?.id ?? "",
  label: option?.label ?? "",
  icon: option?.icon ?? defaultIcon,
  path: option?.url ?? "",
  isActive: location ? location.pathname === option?.url : false,
});
const nav = (optionsCards: ICardData[], location?: Location) => {
  const linkNav = optionsCards.reduce<Record<string, ILinkNav>>(
    (acc, option) => {
      const navLink = createNavLink(option, <MdOutlineStart />, location);
      acc[navLink.id] = navLink;
      return acc;
    },
    {}
  );

  return {
    items: {
      title: "MENU",
      sections: {
        administrate: {
          name: "",
          links: linkNav,
        },
      },
      breakpoint: "848px",
    },
  };
};

export { nav };
