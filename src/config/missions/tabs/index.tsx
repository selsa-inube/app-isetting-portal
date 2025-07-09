import { EComponentAppearance } from "@enum/appearances";
import { MdOutlineReportProblem } from "react-icons/md";

const missionsTabsConfig = (smallScreen: boolean) => {
  return {
    roles: {
      id: "missions",
      isDisabled: false,
      label: "Cargos del operador",
    },
    requestsInProgress: {
      id: "requestsInProgress",
      isDisabled: false,
      label: smallScreen ? `En trámite` : "Cargos del operador en trámite",
      icon: {
        icon: <MdOutlineReportProblem />,
        appearance: EComponentAppearance.WARNING,
      },
    },
  };
};

export { missionsTabsConfig };
