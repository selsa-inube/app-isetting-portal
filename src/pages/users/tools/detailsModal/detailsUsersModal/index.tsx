import { InteractiveModal } from "@design/feedback/InteractiveModal";
import { basic } from "@design/tokens";
import {
  Grid,
  Input,
  Stack,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  Th,
} from "@inubekit/inubekit";
import { IField } from "@ptypes/interactiveModal/IField";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IEntry } from "@ptypes/table/IEntry";

interface FeedbackModalProps {
  onClose: () => void;
  smallScreen: boolean;
  labels: IField[];
  infoData: IPosition;
  dataTable?: IEntry[];
}
const DetailsUsersModal = (props: FeedbackModalProps) => {
  const { onClose, smallScreen, labels, infoData, dataTable } = props;
  return (
    <>
      <InteractiveModal
        closeModal={onClose}
        portalId="portal"
        title="Detalles del usuario"
        infoText="Cerrar"
        width={smallScreen ? "100%" : "700px"}
      >
        <Grid
          templateColumns={
            smallScreen ? "auto" : "repeat(auto-fit, minmax(300px, 1fr))"
          }
          gap={basic.spacing.s16}
          autoRows="auto"
          justifyContent="normal"
        >
          {(labels.length ? labels : Object.keys(infoData)).map((field) => {
            const { id, labelName } =
              typeof field === "string"
                ? { id: field, labelName: field }
                : field;
            const fieldValue = infoData[id as keyof IPosition];

            return fieldValue ? (
              <Input
                key={id}
                label={labelName}
                name={id}
                id={id}
                placeholder={labelName}
                value={fieldValue}
                fullwidth
                type="text"
                size="compact"
              />
            ) : null;
          })}
        </Grid>

        <Stack direction="column" gap={basic.spacing.s16}>
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
        </Stack>
      </InteractiveModal>
    </>
  );
};

export { DetailsUsersModal };
