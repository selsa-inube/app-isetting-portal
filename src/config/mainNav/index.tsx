import { MdOutlineStart } from "react-icons/md";
import { INav } from "@ptypes/home/INav";

const nav: INav = {
  items: {
    title: "MENU",
    sections: {
      administrate: {
        name: "",
        links: {
          positions: {
            id: "privileges",
            label: "Privilegios",
            icon: <MdOutlineStart />,
            path: "/privileges",
          },
        },
      },
    },
  },
  breakpoint: "848px",
};

export { nav };
