import { Cancel } from "@pages/missions/tabs/requestsInProgressTab/tools/cancel";
import { Details } from "@pages/missions/tabs/requestsInProgressTab/tools/details";
import { IAction } from "@ptypes/table/IAction";

const actionsConfig = (setEntryCanceled: (value: string | number) => void, title: string) => {
  const actions: IAction[] = [
    {
      id: "Details",
      content: (entry) => <Details data={entry}  titleMoreDetails={title}/>,
    },

    {
      id: "cancel",
      content: (entry) => (
        <Cancel data={entry} setEntryCanceled={setEntryCanceled} />
      ),
    },

    
  ];

  return actions;
};

export { actionsConfig };