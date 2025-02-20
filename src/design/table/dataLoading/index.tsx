import { SkeletonLine } from "@inubekit/inubekit";
import { Td, Tr } from "@inubekit/table";

import { ActionsLoading } from "../actionsLoading";
import { ITitle } from "../types";

const DataLoading = (titleColumns: ITitle[], numberActions: number) => {
  const rowsLoading = [];
  for (let rows = 0; rows < 4; rows++) {
    rowsLoading.push(
      <Tr key={rows}>
        {titleColumns.map((title) => (
          <Td key={`e-${title.id}`}>
            <SkeletonLine animated />
          </Td>
        ))}
        {ActionsLoading(numberActions)}
      </Tr>
    );
  }
  return rowsLoading;
};

export { DataLoading };
