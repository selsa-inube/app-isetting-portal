import { Cancel } from "@pages/positions/tabs/requestsInProgressTab/tools/delete";
import { Details } from "@pages/positions/tabs/requestsInProgressTab/tools/details";
import { IAction } from "@ptypes/table/IAction";
import { ITitle } from "@ptypes/table/ITitle";

const titles: ITitle[] = [
  {
    id: "requestDate",
    titleName: "Fecha",
    priority: 0,
  },
  {
    id: "description",
    titleName: "Descripción",
    priority: 1,
  },
  {
    id: "requestStatus",
    titleName: "Estado",
    priority: 2,
  },
];

const actionsConfig = (setEntryCanceled: (value: string | number) => void) => {
  const actions: IAction[] = [
    {
      id: "Details",
      content: (entry) => <Details data={entry} />,
    },

    {
      id: "delete",
      content: (entry) => (
        <Cancel data={entry} setEntryCanceled={setEntryCanceled} />
      ),
    },
  ];

  return actions;
};

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 3 },
  { breakpoint: "(max-width: 744px)", totalColumns: 1 },
];

export { titles, actionsConfig, breakPoints };
