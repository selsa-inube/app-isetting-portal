import { Icon } from "@inubekit/inubekit";
import { MdDeleteOutline } from "react-icons/md";
import { IAction } from "@ptypes/design/table/IAction";
import { EComponentAppearance } from "@enum/appearances";

const actionsConfig = () => {
  const actions: IAction[] = [
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
