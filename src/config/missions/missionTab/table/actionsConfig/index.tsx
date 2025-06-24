import { Edit } from "@pages/missions/tools/edit";
import { Delete } from "@pages/missions/tools/delete";
import { IEntry } from "@ptypes/table/IEntry";
import { IAction } from "@ptypes/table/IAction";
import { IMission } from "@ptypes/missions/assisted/IMission";
import { DetailsModal } from "@pages/missions/tools/detailsModal";
import { labelsOptions } from "../labelsOptions";

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

export { actionsConfig };
