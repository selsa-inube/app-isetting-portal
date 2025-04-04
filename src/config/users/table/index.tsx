import { DetailsModal } from "@pages/users/tools/detailsModal";
import { IAction } from "@ptypes/table/IAction";

import { IEntry } from "@ptypes/table/IEntry";
import { ITitle } from "@ptypes/table/ITitle";
import { MdDeleteOutline, MdOutlineCreate } from "react-icons/md";

const titles: ITitle[] = [
  {
    id: "staffName",
    titleName: "Nombre",
    priority: 0,
  },
  {
    id: "identificationDocumentNumber",
    titleName: "Identificación",
    priority: 1,
  },
];

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
  ];

  return actions;
};

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 3 },
  { breakpoint: "(max-width: 744px)", totalColumns: 1 },
];
export { titles, actionsConfig, breakPoints };
