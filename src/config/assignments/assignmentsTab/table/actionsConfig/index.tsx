import { IAction } from "@ptypes/design/table/IAction";
import { Details } from "@pages/assignments/tabs/assignmentsTab/tools/details";
import { IEntry } from "@ptypes/design/table/IEntry";
import { Delete } from "@pages/assignments/tabs/assignmentsTab/tools/delete";

const actionsConfig = (setEntryDeleted: (id: string | number) => void) => {
  const actions: IAction[] = [
    {
      id: "Details",
      content: (entry: IEntry) => <Details data={entry} />,
    },
    {
      id: "delete",
      content: (entry: IEntry) => (
       <Delete  data={entry} setEntryDeleted ={setEntryDeleted}/>
      ),
    },
  ];

  return actions;
};

export { actionsConfig };
