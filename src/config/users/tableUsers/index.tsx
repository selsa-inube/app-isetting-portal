import { Delete } from "@pages/users/tabs/userTab/tools/delete";
import { DetailsModal } from "@pages/users/tabs/userTab/tools/detailsModal";
import { Edit } from "@pages/users/tabs/userTab/tools/edit";
import { Group } from "@pages/users/tabs/userTab/tools/group";
import { IAction } from "@ptypes/design/table/IAction";

import { IEntry } from "@ptypes/design/table/IEntry";

const labelsOptions = {
  "Información personal": [
    {
      id: "identificationTypeNaturalPerson",
      labelName: "Tipo de identificación",
      type: "table",
    },
    {
      id: "identificationDocumentNumber",
      labelName: "Número de identificación",
      type: "table",
    },
    {
      id: "biologicalSex",
      labelName: "Sexo biológico del funcionario",
      type: "table",
    },
    {
      id: "birthDay",
      labelName: "Fecha de nacimiento",
      type: "table",
    },
  ],
  "Misión para el operador": [
    {
      id: "missionData.missionName",
      labelName: "Nombre",
      type: "table",
    },
    {
      id: "missionData.descriptionUse",
      labelName: "Descripción",
      type: "table",
    },
  ],
  "Datos de contacto": [
    {
      id: "principalEmail",
      labelName: "Email",
      type: "table",
    },
    {
      id: "principalPhone",
      labelName: "Móvil",
      type: "table",
    },
  ],
};
const actionsConfig = (setEntryDeleted: (value: string | number) => void) => {
  const actions: IAction[] = [
    {
      id: "details",
      content: (data: IEntry) => (
        <DetailsModal data={data} labelsOptions={labelsOptions} />
      ),
    },
    {
      id: "Edit",
      content: (entry: IEntry) => <Edit data={entry as IEntry} />,
    },
    {
      id: "delete",
      actionName: "Eliminar",
      content: (entry: IEntry) => (
        <Delete data={entry} setEntryDeleted={setEntryDeleted} />
      ),
    },
    {
      id: "Group",
      content: () => <Group />,
    },
  ];

  return actions;
};

export { actionsConfig };
