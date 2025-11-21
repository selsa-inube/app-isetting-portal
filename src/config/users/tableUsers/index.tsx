import { DetailsModal } from "@pages/users/tabs/userTab/tools/detailsModal";
import { IAction } from "@ptypes/table/IAction";

import { IEntry } from "@ptypes/table/IEntry";
import { MdDeleteOutline, MdOutlineCreate, MdGroup } from "react-icons/md";

const labelsOptions = {
  "Información personal": [{
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
  "Misión para el operador": [{
    id: "businessManagerName",
    labelName: "Nombre",
    type: "table",
  },],
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
const actionsConfig = () => {
  const actions: IAction[] = [
    {
      id: "details",
      content: (data: IEntry) => (
        <DetailsModal data={data} labelsOptions={labelsOptions} />
      ),
    },
    {
      id: "Edit",
      content: (entry: IEntry) => (
        <MdOutlineCreate title={`View ${entry.staffName}`} />
      ),
    },
    {
      id: "Delete",
      content: (entry: IEntry) => (
        <MdDeleteOutline title={`View ${entry.staffName}`} />
      ),
    },
    {
      id: "Group",
      content: (entry: IEntry) => <MdGroup title={`View ${entry.staffName}`} />,
    },
  ];

  return actions;
};

export { actionsConfig };
