import { IDataToAssignmentFormEntry } from "@ptypes/positions/assisted/IDataToAssignmentFormEntry";

const titleButtonTextAssited = {
  before: "Atrás",
  after: "Siguiente",
  finish: "Enviar",
};

const dataToAssignmentFormEntry = (props: IDataToAssignmentFormEntry) => {
  const { dataOptions, idLabel, valueLabel, isActiveLabel } = props;
  return dataOptions.map((dataOption) => ({
    value: String(dataOption[valueLabel]),
    isActive: Boolean(dataOption[isActiveLabel] === "Y"),
    id: String(dataOption[idLabel]),
  }));
};

export { titleButtonTextAssited, dataToAssignmentFormEntry };
