import { ICardData } from "@ptypes/home/ICardData";
import { MdOutlineStart } from "react-icons/md";

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
