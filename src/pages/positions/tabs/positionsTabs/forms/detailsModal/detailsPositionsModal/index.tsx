import { InteractiveModal } from "@design/feedback/InteractiveModal";
import { basic } from "@design/tokens";
import {
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Textarea,
  Input,
} from "@inubekit/inubekit";
import { IAction } from "@ptypes/interactiveModal/IAction";
import { IField } from "@ptypes/interactiveModal/IField";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IEntry } from "@ptypes/table/IEntry";
interface FeedbackModalProps {
  onClose: () => void;
  smallScreen: boolean;
  labels: IField[];
  infoData: IPosition;
  actions?: IAction[];
  dataTable?: IEntry[];
  actionsTitle?: string;
}
const DetailsPositionsModal = (props: FeedbackModalProps) => {
  const {
    onClose,
    smallScreen,
    labels,
    infoData,
    dataTable,
    actions,
    actionsTitle,
  } = props;
  const hasLabels = labels.length > 0;
  const hasActions = actions && actions.length > 0;
  return (
    <InteractiveModal
      portalId="portal"
      title="Detalles de cargo"
      closeModal={onClose}
      infoText={"Cerrar"}
      width={smallScreen ? "100%" : "600px"}
    >
      {hasLabels
        ? labels.map((field, index) => {
            const fieldValue = infoData[field.id as keyof IPosition];
            if (Array.isArray(fieldValue) && field.type === "table") {
              return (
                <Table tableLayout="auto" key={field.id}>
                  <Thead>
                    <Tr>
                      <Th align="left">{field.labelName}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {fieldValue.map((row, rowIndex) => (
                      <Tr key={`${rowIndex}`}>
                        <Td align="left">{row}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              );
            } else {
              return (
                fieldValue &&
                (index === 0 ? (
                  <Input
                    key={field.id}
                    label={field.labelName}
                    name={field.id}
                    id={field.id}
                    placeholder={field.labelName}
                    value={fieldValue}
                    fullwidth={true}
                    type="text"
                    size="compact"
                  />
                ) : (
                  <Textarea
                    key={field.id}
                    label={field.labelName}
                    name={field.id}
                    id={field.id}
                    placeholder={field.labelName}
                    value={fieldValue}
                    fullwidth={true}
                  />
                ))
              );
            }
          })
        : Object.keys(infoData).map((index, i) =>
            i === 0 ? (
              <Input
                key={index}
                label={index}
                name={index}
                id={index}
                placeholder={index}
                value={infoData[index]}
                fullwidth={true}
                type="text"
                size="compact"
              />
            ) : (
              <Textarea
                key={index}
                label={index}
                name={index}
                id={index}
                placeholder={index}
                value={infoData[index]}
                fullwidth={true}
              />
            )
          )}

      {hasActions && (
        <Stack direction="column" gap={basic.spacing.s16}>
          <Text type="title" size="medium" appearance="dark">
            {actionsTitle}
          </Text>
          {actions.map((action) => (
            <Stack key={action.id} gap={basic.spacing.s10}>
              {typeof action.content === "function"
                ? action.content(infoData)
                : action.content}
            </Stack>
          ))}
        </Stack>
      )}

      {dataTable && (
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
      )}
    </InteractiveModal>
  );
};

export { DetailsPositionsModal };
