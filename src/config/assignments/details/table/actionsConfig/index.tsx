import { DeleteDetails } from "@pages/assignments/moreDetails/tools/delete";
import { IAction } from "@ptypes/design/table/IAction";
import { IEntry } from "@ptypes/design/table/IEntry";

const actionsConfig = (setEntryDeleted?: (id: string | number) => void) => {
  const actions: IAction[] = [
    {
      id: "delete",
       content: (entry: IEntry) => (
        <DeleteDetails data={entry} setEntryDeleted={setEntryDeleted} />
      ),
    },
  ];

  return actions;
};

export { actionsConfig };
