import { createContext, useMemo, useState } from "react";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IOptionInitialiceEntry } from "@ptypes/positions/assisted/IOptionInitialiceEntry";
import { IPositionsContext } from "./types";

const PositionsContext = createContext<IPositionsContext>(
  {} as IPositionsContext
);

interface IPositionsProvider {
  children: React.ReactNode;
}

const PositionsProvider = ({ children }: IPositionsProvider) => {
  const [positions, setPositions] = useState<IPosition[]>([]);
  const [roles, setRoles] = useState<IOptionInitialiceEntry[]>([]);

  const authContext = useMemo(
    () => ({
      positions,
      roles,
      setPositions,
      setRoles,
    }),
    [positions, roles, setPositions, setRoles]
  );

  return (
    <PositionsContext.Provider value={authContext}>
      {children}
    </PositionsContext.Provider>
  );
};

export { PositionsContext, PositionsProvider };
export type { IPositionsProvider };
