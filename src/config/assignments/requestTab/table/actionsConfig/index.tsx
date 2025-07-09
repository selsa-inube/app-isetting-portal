import { Cancel } from "@pages/assignments/tabs/requestsInProgressTab/tools/cancel";
import { Details } from "@pages/assignments/tabs/requestsInProgressTab/tools/details";
import { IAction } from "@ptypes/design/table/IAction";
import { IEntry } from '@ptypes/design/table/IEntry';

const actionsConfig = (setEntryCanceled: (value: string | number) => void) => {
  const actions: IAction[] = [
    {
      id: "Details",
      content: (entry: IEntry) => <Details data={entry} />,
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