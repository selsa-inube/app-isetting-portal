import { MdOutlineStart } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

const options = [
  {
    publicCode: "Privilegios",
    icon: <MdOutlineStart />,
    url: "/positions",
  },
];

const subOptions = [
  {
    publicCode: "Privilegios",
    publicCodeOption: "Cargos Inube",
    icon: <TfiMenuAlt size={"20px"} />,
    url: "/privileges/positions",
    domain: "catalogs",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },

      {
        path: "/privileges/positions",
        label: "Cargos",
        id: "/privileges/positions",
        isActive: true,
      },
    ],
  },
];

const normalizeOptionsByPublicCode = (publicCode: string) =>
  options.find((data) => data.publicCode === publicCode);

const normalizesubOptionsByPublicCode = (
  publicCode: string,
  publicCodeSubOption: string
) =>
  subOptions.find(
    (data) =>
      data.publicCode === publicCode &&
      data.publicCodeOption === publicCodeSubOption
  );
export {
  options,
  normalizeOptionsByPublicCode,
  normalizesubOptionsByPublicCode,
};
