import { Edit } from "@pages/missions/tools/edit";
import { Delete } from "@pages/missions/tools/delete";
import { IEntry } from "@ptypes/table/IEntry";
import { IAction } from "@ptypes/table/IAction";
import { IMission } from "@ptypes/missions/assisted/IMission";
import { DetailsModal } from "@pages/missions/tools/detailsModal";

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
          data={data as unknown as IMission}
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

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 2 },
  { breakpoint: "(max-width: 744px)", totalColumns: 1 },
];


export {
  actionsConfig,
  labelsOptions,
  titlesOptions,
  positionsBreakPointsConfig,
  breakPoints,
};
