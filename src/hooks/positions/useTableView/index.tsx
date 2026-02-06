import { IUseTableData } from "@ptypes/hooks/IUseTableData";
import { useMemo } from "react";

const useTableData = (props: IUseTableData) => {
  const { dataTable } = props;

  return useMemo(() => {
    if (!dataTable || dataTable.length === 0) {
      return { headers: [], rows: [] };
    }

    const headers = Object.keys(dataTable[0]);

    const rows = dataTable.map((row, rowIndex) => ({
      ...row,
      roles: row.Roles,
      _rowKey: `row-${rowIndex}`,
    }));

    return { headers, rows };
  }, [dataTable]);
};

export { useTableData };
