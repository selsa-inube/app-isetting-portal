import { useMemo } from "react";
import { ITabllePositions } from "@ptypes/positions/details/ITabllePositions";

const UseTableData = (dataTable: ITabllePositions["dataTable"]) => {
  return useMemo(() => {
    if (!dataTable || dataTable.length === 0) return { headers: [], rows: [] };

    const headers = Object.keys(dataTable[0]);
    const rows = dataTable.map((row, rowIndex) =>
      Object.values(row).map((value, colIndex) => ({
        key: `${rowIndex}-${colIndex}`,
        value,
      }))
    );

    return { headers, rows };
  }, [dataTable]);
};

export { UseTableData };
