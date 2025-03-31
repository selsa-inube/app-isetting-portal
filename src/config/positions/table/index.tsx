import { IPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
import { DetailsModal } from "@pages/positions/tabs/positionsTabs/forms/detailsModal";
import { IAction } from "@pages/positions/tabs/positionsTabs/types";
import { Edit } from "@pages/positions/tabs/positionsTabs/forms/edit";
import { IEntry } from "@design/table/types";
import { Delete } from "@pages/positions/tabs/positionsTabs/forms/delete";

const titlesOptions = [
  {
    id: "missionName",
    titleName: "Cargos",
    action: false,
    priority: 1,
  },
];

const positionsBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1010px)", totalColumns: 1 },
  { breakpoint: "(max-width: 848px)", totalColumns: 2 },
  { breakpoint: "(max-width: 430px)", totalColumns: 1 },
];

const labelsOptions = [
  {
    id: "missionId",
    labelName: "Código",
    type: "table",
  },
  {
    id: "descriptionUse",
    labelName: "Descripción Funcional",
    type: "text",
  },
];
const actionsConfig = (setEntryDeleted: (value: string | number) => void) => {
  const actions: IAction[] = [
    {
      id: "details",
      actionName: "Detalle",
      content: (data: IEntry) => (
        <DetailsModal
          data={data as unknown as IPosition}
          labelsOptions={labelsOptions}
        />
      ),
    },
    {
      id: "edit",
      actionName: "Editar",
      content: (entry: IEntry) => <Edit data={entry as IEntry} />,
    },
    {
      id: "delete",
      actionName: "Eliminar",
      content: (entry: IEntry) => (
        <Delete data={entry} setEntryDeleted={setEntryDeleted} />
      ),
    },
  ];
  return actions;
};

export {
  actionsConfig,
  labelsOptions,
  titlesOptions,
  positionsBreakPointsConfig,
};
