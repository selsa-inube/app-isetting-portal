import { ISelectBusUnitEntry } from "../ISelectBusUnitEntry";

interface IPosition {
  onSubmit?: (values: ISelectBusUnitEntry) => void;
}

export type { IPosition };
