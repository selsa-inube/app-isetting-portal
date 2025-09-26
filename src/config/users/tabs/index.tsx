import { EComponentAppearance } from "@enum/appearances";
import { MdOutlineReportProblem } from "react-icons/md";

const usersTabsConfig = (smallScreen: boolean) => {
  return {
    staff: {
      id: "staff",
      isDisabled: false,
      label: smallScreen ? "Funcionarios" : "Funcionarios vigentes",
    },
    requestsInProgress: {
      id: "requestsInProgress",
      isDisabled: false,
      label: smallScreen ? `En trámite` : "Funcionarios en trámite",
      icon: {
        icon: <MdOutlineReportProblem />,
        appearance: EComponentAppearance.WARNING,
      },
    },
  };
};

export { usersTabsConfig };
