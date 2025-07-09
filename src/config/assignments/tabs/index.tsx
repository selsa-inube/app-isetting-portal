
import { MdOutlineReportProblem } from "react-icons/md";
import { EComponentAppearance } from "@enum/appearances";

const assignmentsTabsConfig = (smallScreen: boolean) => {
  return {
    assigments: {
      id: "assigments",
      isDisabled: false,
      label: smallScreen ? "Vigentes" : "Encargos vigentes",
    },
    requestsInProgress: {
      id: "requestsInProgress",
      isDisabled: false,
      label: smallScreen ? `En trámite` : "Encargos en trámite",
      icon: {
        icon: <MdOutlineReportProblem />,
        appearance: EComponentAppearance.WARNING,
      },
    },
  };
};

export { assignmentsTabsConfig };
