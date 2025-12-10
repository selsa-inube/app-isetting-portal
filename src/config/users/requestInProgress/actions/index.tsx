import { Delete } from "@pages/missions/tools/delete";
import { Details } from "@pages/positions/tabs/requestsInProgressTab/tools/details";
import { IAction } from "@ptypes/table/IAction";
import { IEntry } from "@ptypes/table/IEntry";

const requestInProgressActionsConfig = (
  setEntryDeleted: (value: string | number) => void
) => {
  const actions: IAction[] = [
    {
      id: "details",
      content: (entry: IEntry) => <Details data={entry} />,
    },
    {
      id: "delete",
      content: (entry: IEntry) => (
        <Delete data={entry} setEntryDeleted={setEntryDeleted} />
      ),
    },
  ];

  return actions;
};
export { requestInProgressActionsConfig };
