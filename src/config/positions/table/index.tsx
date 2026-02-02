import { DetailsModal } from "@pages/positions/tabs/positionsTabs/forms/detailsModal";

import { Edit } from "@pages/positions/tabs/positionsTabs/forms/edit";

import { Delete } from "@pages/positions/tabs/positionsTabs/forms/delete";
import { IEntry } from "@ptypes/table/IEntry";
import { IAction } from "@ptypes/table/IAction";
import { IPosition } from "@ptypes/positions/assisted/IPosition";

const titlesOptions = [
  {
    id: "positionName",
    titleName: "Cargos de la Unidad de Negocio",
    action: false,
    priority: 0,
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
    id: "positionName",
    labelName: "Nombre",
    type: "text",
  },
  {
    id: "businessUnitCode",
    labelName: "Unidad de negocio",
    type: "text",
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
