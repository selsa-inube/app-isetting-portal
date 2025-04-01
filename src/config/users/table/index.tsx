import { IAction } from "@ptypes/table/IAction";
import { IEntry } from "@ptypes/table/IEntry";
import { ITitle } from "@ptypes/table/ITitle";
import {
  MdDeleteOutline,
  MdOutlineCreate,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

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

const actionsConfig = () => {
  const actions: IAction[] = [
    {
      id: "Details",
      content: (entry: IEntry) => (
        <MdOutlineRemoveRedEye title={`View ${entry.staffName}`} />
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
