import { MdOutlineStart } from "react-icons/md";
import { ICardData } from "@pages/home/types";

const appCards: ICardData[] = [
  {
    id: "Positions",
    label: "Cargos",
    description: "Cargos.",
    icon: <MdOutlineStart />,
    url: "/positions",
  },
];

export { appCards };
