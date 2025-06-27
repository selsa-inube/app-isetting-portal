import { IPosition } from "@ptypes/positions/assisted/IPosition";

interface IPositionsContext {
  positions: IPosition[];
  setPositions: React.Dispatch<React.SetStateAction<IPosition[]>>;
}

export type { IPositionsContext };
