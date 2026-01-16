import { MdOutlineStart } from "react-icons/md";
import { Location } from "react-router-dom";
import { ILinkNav } from "@inubekit/inubekit";
import { actionsConfig } from "@config/mainActionLogout";
import { portalId } from '@config/portalId';
import { IUseMainNavigation } from "@ptypes/hooks/IUseMainNavigation";
import { ICardData } from "@ptypes/home/ICardData";

const useMainNavigation = (props: IUseMainNavigation) => {

  const { optionsCards, location } = props;

  const createNavLink = (
    option: ICardData,
    defaultIcon: React.ReactElement,
    location?: Location,
  ) => ({
    id: option?.id ?? "",
    label: option?.publicCode ?? "",
    icon: option?.icon ?? defaultIcon,
    path: option?.url ?? "",
    isActive: location ? location.pathname === option?.url : false,
  });
  const linkNav = optionsCards.reduce<Record<string, ILinkNav>>(
    (linkIndex, option) => {
      const navLink = createNavLink(option, <MdOutlineStart />, location);
      linkIndex[navLink.id] = navLink;
      return linkIndex;
    },
    {},
  );

  const optionsHeader = {
    nav: {
      reactPortalId: portalId,
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
      actions: actionsConfig(),
    },
    breakpoint: "848px",
  };

  const optionsNav = {
    title: "MENU",
    sections: {
      administrate: {
        name: "",
        links: linkNav,
      },
    },
  };

  return {
    optionsHeader,
    optionsNav,
  };
};

export { useMainNavigation };
