import { EComponentAppearance } from "@enum/appearances";
import { MdOutlineReportProblem } from "react-icons/md";

const positionsTabsConfig = (smallScreen: boolean) => {
  return {
    cargos: {
      id: "positions",
      isDisabled: false,
      label: smallScreen ? "Cargos" :"Cargos de unidades de negocio",
    },
    requestsInProgress: {
      id: "requestsInProgress",
      isDisabled: false,
      label: smallScreen ? `En trámite` : "Cargos de unidades de negocio en trámite",
      icon: {
        icon: <MdOutlineReportProblem />,
        appearance: EComponentAppearance.WARNING,
      },
    },
  };
};

export { positionsTabsConfig };
