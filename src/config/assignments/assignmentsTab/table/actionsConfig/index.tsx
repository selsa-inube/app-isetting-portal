import { Icon } from "@inubekit/inubekit";
import { MdDeleteOutline } from "react-icons/md";
import { IAction } from "@ptypes/design/table/IAction";
import { EComponentAppearance } from "@enum/appearances";
import { Details } from "@pages/assignments/tabs/assignmentsTab/tools/details";
import { IEntry } from "@ptypes/design/table/IEntry";

const actionsConfig = () => {
  const actions: IAction[] = [
    {
      id: "Details",
      content: (entry: IEntry) => <Details data={entry} />,
    },
    {
      id: "delete",
      content: () => (
        <Icon
          appearance={EComponentAppearance.DANGER}
          icon={<MdDeleteOutline />}
          size="16px"
          cursorHover
          spacing="narrow"
        />
      ),
    },
  ];

  return actions;
};

export { actionsConfig };
