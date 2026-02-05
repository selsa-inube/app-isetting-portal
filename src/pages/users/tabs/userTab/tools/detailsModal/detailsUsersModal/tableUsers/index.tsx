import { Table, Thead, Tr, Th, Tbody, Td } from "@inubekit/inubekit";
import { ITableComponent } from "@ptypes/users/tabs/userTab/details/ITableComponent";

const TableUsers = (props: ITableComponent) => {
  const { dataTable } = props;

  const columns = Object.keys(dataTable[0]).filter((key) => key !== "id");

  return (
    <Table tableLayout="auto">
      <Thead>
        <Tr>
          {columns.map((key) => (
            <Th key={key} align="left">
              {key}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {dataTable.length > 0 ? (
          dataTable.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <Td key={colIndex} align="left">
                  {row[col]}
                </Td>
              ))}
            </Tr>
          ))
        ) : (
          <Tr>
            <Td align="left">No data available</Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};

export { TableUsers };
