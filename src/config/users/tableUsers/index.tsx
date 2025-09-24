import { DetailsModal } from "@pages/users/tools/detailsModal";
import { IAction } from "@ptypes/table/IAction";

import { IEntry } from "@ptypes/table/IEntry";
import { MdDeleteOutline, MdOutlineCreate, MdGroup } from "react-icons/md";

const labelsOptions = [
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
    labelName: "Sexo al nacer",
    type: "table",
  },
  {
    id: "birthDay",
    labelName: "Fecha de nacimiento",
    type: "table",
  },
  {
    id: "principalEmail",
    labelName: "Email",
    type: "table",
  },
  {
    id: "principalPhone",
    labelName: "Número de celular",
    type: "table",
  },
  {
    id: "businessManagerName",
    labelName: "Cargo",
    type: "table",
  },
  {
    id: "identificationDocumentNumber",
    labelName: "Cuenta del usuario",
    type: "table",
  },
];
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
