import { Table, Thead, Tr, Th, Tbody, Td } from "@inubekit/inubekit";
import { ITableComponent } from "@ptypes/users/details/ITableComponent";

const TableUsers = (props: ITableComponent) => {
  const { dataTable } = props;
  return (
    <Table tableLayout="auto">
      <Thead>
        <Tr>
          {Object.keys(dataTable[0]).map((key) => (
            <Th key={key} align="left">
              {key}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {dataTable.map((row, rowIndex) => (
          <Tr key={`${rowIndex}`}>
            {Object.values(row).map((value, colIndex) => (
              <Td key={colIndex} align="left">
                {value}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export { TableUsers };
