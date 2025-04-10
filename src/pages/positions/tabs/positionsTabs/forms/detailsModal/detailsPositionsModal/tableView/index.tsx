import { UseTableData } from "@hooks/positions/useTableView";
import { Table, Thead, Tr, Th, Tbody, Td } from "@inubekit/inubekit";
import { ITabllePositions } from "@ptypes/positions/details/ITabllePositions";

const TableView = (props: ITabllePositions) => {
  const { dataTable } = props;
  const { headers, rows } = UseTableData(dataTable);

  if (!rows || rows.length === 0) return null;

  return (
    <Table tableLayout="auto">
      <Thead>
        <Tr>
          {headers.map((key) => (
            <Th key={key} align="left">
              {key}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map(({ key, value }) => (
              <Td key={key} align="left">
                {value}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export { TableView };
