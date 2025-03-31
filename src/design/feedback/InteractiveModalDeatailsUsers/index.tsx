import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import {
  Button,
  Stack,
  Text,
  Blanket,
  useMediaQuery,
  Icon,
  Input,
  Table,
  Tr,
  Tbody,
  Thead,
  Th,
  Td,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { enviroment } from "@config/environment";
import { IPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
import { SubjectSearchCard } from "@design/cards/SubjectSearchCard";
import { StyledModal, StyledDivider, StyledConatinerInput } from "./styles";
import { InteractiveModalProps } from "./types";

const InteractiveModalDeatailsUsers = ({
  closeModal,
  divider,
  infoData,
  idLabel = "userID",
  labels = [],
  nameLabel = "username",
  infoTitle,
  portalId,
  searchData,
  selectedItem,
  title,
  dataTable,
  type = "fields",
}: InteractiveModalProps) => {
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);
  const node = document.getElementById(portalId);

  const renderCard = (data: { [key: string]: string }) => {
    if (data[idLabel] !== selectedItem) return null;

    return (
      <SubjectSearchCard
        subjectSearchData={{
          id: data[idLabel],
          name: data[nameLabel],
        }}
        closeIcon
      />
    );
  };

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={smallScreen} type={type}>
        <Stack
          direction="column"
          gap={basic.spacing.s24}
          width={smallScreen ? "auto" : "876px"}
          height={smallScreen ? "100%" : "auto"}
        >
          <Stack direction="column" gap={basic.spacing.s20}>
            <Stack alignItems="center" justifyContent="space-between">
              <Text type="headline" size="small" appearance="dark">
                {title}
              </Text>
              <Icon
                appearance={"dark"}
                icon={<MdClear />}
                spacing="narrow"
                size="24px"
                cursorHover
                onClick={closeModal}
              />
            </Stack>
            <StyledDivider $smallScreen={smallScreen} />

            {searchData && Object.values(searchData).map(renderCard)}
            {divider && <StyledDivider $smallScreen={smallScreen} />}
          </Stack>
          <StyledConatinerInput $smallScreen={smallScreen}>
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
          </StyledConatinerInput>
          <Stack direction="column" gap={basic.spacing.s16}>
            {infoTitle && (
              <Text type="body" size="medium">
                {infoTitle}
              </Text>
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
          </Stack>

          <Stack justifyContent="right">
            <Button onClick={closeModal}>Cerrar</Button>
          </Stack>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { InteractiveModalDeatailsUsers };
