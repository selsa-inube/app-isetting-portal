import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import {
  Stack,
  Textfield,
  Button,
  Col,
  Colgroup,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  Toggle,
  Text,
  Fieldset,
  Icon,
  useMediaQuery,
} from "@inubekit/inubekit";

import { basic } from "@design/tokens";

import { Menu } from "@design/navigation";
import { FilterFields } from "@design/feedback/filterFields";
import {
  StyledForm,
  StyledOptionsContainer,
  StyledToggleContainer,
} from "./styles";
import { IAssignmentFormUI, titlesOptions } from "./types";
const AssignmentFormUI = (props: IAssignmentFormUI) => {
  const {
    title,
    handleToggleAllEntries,
    entries,
    options,
    handleSubmit,
    showMenu,
    showModal,
    selectedOptions,
    onHandleSelectCheckChange,
    handleFilterInput,
    filterValue,
    isAssignAll,
    menuOptions,
    filteredRows,
    setSelectedOptions,
    handleToggleRol,
    handleCloseMenuRol,
    handleToggleModal,
    handleClick,
    handleClearFilters,
    onSelectChange,
    dataValidations,
  } = props;
  const smallScreen = useMediaQuery("(max-width: 650px)");
  return (
    <StyledForm onSubmit={handleSubmit}>
      <FilterFields
        name="Filtrar"
        actionText="Filtrar"
        title="Filtrar"
        onClick={handleClick}
        options={options}
        onSelectChange={onSelectChange}
        showModal={showModal}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        handleToggleModal={handleToggleModal}
        handleClearFilters={handleClearFilters}
      />

      <Fieldset legend={title} size="small" type="title">
        <Stack
          gap={basic.spacing.s16}
          direction="column"
          width="-webkit-fill-available"
        >
          <Stack gap={basic.spacing.s32} justifyContent="space-between">
            <Stack gap={basic.spacing.s16} direction="column">
              <Textfield
                type="search"
                iconBefore={<MdSearch size={22} />}
                placeholder="Búsqueda..."
                name="search"
                id="search"
                size="compact"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFilterInput(e)
                }
                value={filterValue}
                disabled={dataValidations}
              />
            </Stack>
            {smallScreen ? (
              <StyledOptionsContainer>
                <Icon
                  icon={<MdOutlineMoreHoriz />}
                  appearance="dark"
                  spacing="narrow"
                  size="24px"
                  shape="circle"
                  onClick={handleToggleRol}
                />
                {showMenu && (
                  <Menu
                    options={menuOptions}
                    handleClose={handleCloseMenuRol}
                  />
                )}
              </StyledOptionsContainer>
            ) : (
              <Stack gap={basic.spacing.s8} alignItems="end">
                <Button
                  spacing="compact"
                  onClick={() => handleToggleAllEntries(false)}
                  disabled={
                    !entries.some((entry) => entry.isActive) || dataValidations
                  }
                >
                  Desasignar todos
                </Button>
                <Button
                  spacing="compact"
                  onClick={() => handleToggleAllEntries(true)}
                  disabled={isAssignAll || dataValidations}
                >
                  Asignar todos
                </Button>
              </Stack>
            )}
          </Stack>

          <Table>
            <Colgroup>
              <Col width="8%" />
              <Col width="95%" />
            </Colgroup>
            <Thead>
              <Tr border="bottom">
                {titlesOptions.map((title, index) => (
                  <Th key={index} align="left">
                    {title.titleName}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {dataValidations ? (
                <Tr>
                  <Td align="center" colSpan={titlesOptions.length}>
                    <Text>No hay filas disponibles.</Text>
                  </Td>
                </Tr>
              ) : (
                filteredRows.map((entry, rowIndex) => (
                  <Tr key={rowIndex} border="bottom">
                    <Td align="left" type="custom">
                      <StyledToggleContainer>
                        <Toggle
                          key={entry.id}
                          checked={entry.isActive}
                          disabled={false}
                          id={`${entry.id}`}
                          name="isActive"
                          margin={basic.spacing.s0}
                          onChange={() => onHandleSelectCheckChange(entry.id)}
                          padding={basic.spacing.s0}
                          size="small"
                        />
                      </StyledToggleContainer>
                    </Td>
                    <Td align="left"> {entry.value}</Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </Stack>
      </Fieldset>
    </StyledForm>
  );
};

export { AssignmentFormUI };
