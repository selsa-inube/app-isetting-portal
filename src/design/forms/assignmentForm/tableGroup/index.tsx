import { columns } from "@config/assignments/assignmentForm/tableGroup";
import {
  Toggle,
  Text,
  Tr,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Col,
} from "@inubekit/inubekit";
import { IToggleTableGroupProps } from "@ptypes/assignments/assignmentForm/tableGroup/IToggleTableGroupProps";

const ToggleTableGroup = ({
  entries,
  columnsTitles,
  onSelectCheckChange,
  size = "small",
}: IToggleTableGroupProps) => {
  return (
    <Table tableLayout="auto">
      <Col key={columns.toggleColumnTitle} />
      <Col key={columns.firstColumnTitle} width={"50%"} />
      <Col key={columns.secondColumnTitle} width={"50%"} />
      <Thead>
        <Tr>
          <Th key={columns.toggleColumnTitle} align="left">
            {""}
          </Th>
          {columnsTitles.map((column) => (
            <Th key={column.id} align="center">
              <Text weight="bold" size="medium">
                {column.label}
              </Text>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {entries.map((entry) => (
          <Tr key={entry.id} border="top">
            <Td align="left">
              <Toggle
                checked={entry.isActive}
                id={entry.id}
                name="isActive"
                size={size}
                onChange={() => onSelectCheckChange(entry.id)}
              />
            </Td>

            {columnsTitles.map((column) => (
              <Td key={column.id} align="left">
                <Text type="body" size="medium">
                  {entry[column.id]?.toString() ?? ""}
                </Text>
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export { ToggleTableGroup };
