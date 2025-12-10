import { IUseTableData } from "@ptypes/hooks/IUseTableData";
import { useMemo } from "react";

const useTableData = (props: IUseTableData) => {

  const {dataTable } = props;
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

export { useTableData };
