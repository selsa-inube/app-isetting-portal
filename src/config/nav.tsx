import { MdOutlineStart } from "react-icons/md";
import { INavLink } from "@inubekit/inubekit";
import { ICardData } from "@ptypes/home/ICardData";

const createNavLink = (
  option: ICardData,
  defaultIcon: React.ReactNode,
  location?: Location,
) => ({
  id: option?.id ?? "",
  label: option?.publicCode ?? "",
  icon: option?.icon ?? defaultIcon,
  path: option?.url ?? "",
  isActive: location ? location.pathname === option?.url : false,
});

const mainNavigation = (optionsCards: ICardData[], location?: Location) => {
  const linkNav = optionsCards.reduce<Record<string, INavLink>>(
    (acc, option) => {
      const navLink = createNavLink(option, <MdOutlineStart />, location);
      acc[navLink.id] = navLink;
      return acc;
    },
    {}
  );

  return {
    nav: {
      reactPortalId: "portal",
      title: "MENU",
      sections: [
        {
          subtitle: "",
          links: Object.values(linkNav),

          isOpen: false,
          onClose: () => {
            console.log();
          },
          onToggle: () => {
            console.log();
          },
        },
      ],
    },
    breakpoint: "848px",
  };
};

export { mainNavigation };
