import { MdSearch, MdPersonAddAlt, MdOutlineMoreHoriz } from "react-icons/md";
import {
  Textfield,
  Col,
  Colgroup,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  Tfoot,
  Pagination,
  Button,
  Stack,
  Icon,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Loading } from "@pages/login/loading";
import { actionsConfig, titlesOptions } from "@config/positions/table";
import { StyledButtonWrapper, StyledContainer } from "./styles";
import { IPositions } from "./types";
import { Menu } from "@design/navigation";
import { menuPositionLinks } from "@config/positions/menuInvitation";

const PositionsUI = (props: IPositions) => {
  const {
    handleSearchPositions,
    searchPosition,
    loading,
    data,
    smallScreen,
    ShowAction,
    ShowActionTitle,
    handleToggleMenuInvitation,
    filteredData,
    handleStartPage,
    showMenu,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
    firstEntryInPage,
    lastEntryInPage,
    handleCloseMenuInvitation,
    paginatedData,
  } = props;

  return (
    <Stack direction="column" width="-webkit-fill-available">
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s32} direction="column">
          <Stack justifyContent="space-between" alignItems="center">
            <Textfield
              name="searchPositions"
              id="searchPositions"
              placeholder="Búsqueda..."
              type="search"
              iconBefore={<MdSearch />}
              size="compact"
              value={searchPosition}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchPositions(e)
              }
            />
            {smallScreen ? (
              <StyledContainer>
                <Icon
                  icon={<MdOutlineMoreHoriz />}
                  size="24px"
                  onClick={handleToggleMenuInvitation}
                  cursorHover={true}
                  appearance="dark"
                />
                {showMenu && (
                  <Menu
                    options={menuPositionLinks}
                    handleClose={handleCloseMenuInvitation}
                  />
                )}
              </StyledContainer>
            ) : (
              <StyledButtonWrapper>
                <Button
                  iconBefore={<MdPersonAddAlt />}
                  spacing="wide"
                  type="link"
                  path="/privileges/positions/add-position"
                >
                  Solicitar nuevo cargo
                </Button>
              </StyledButtonWrapper>
            )}
          </Stack>
          {loading && data.length <= 0 ? (
            <Loading />
          ) : (
            <Table>
              <Colgroup>
                <Col width="75%" />
              </Colgroup>

              <Thead>
                <Tr border="bottom">
                  {titlesOptions.map((title, index) => (
                    <Th
                      key={index}
                      action={title.action}
                      align={title.action ? "center" : "left"}
                    >
                      {title.titleName}
                    </Th>
                  ))}
                  {ShowActionTitle(actionsConfig(() => {}))}
                </Tr>
              </Thead>
              <Tbody>
                {paginatedData.map((entry, rowIndex) => (
                  <Tr key={rowIndex} border="bottom">
                    {titlesOptions.map((title) => (
                      <Td
                        key={`e-${entry[title.id]}`}
                        align={entry.action ? "center" : "left"}
                      >
                        {entry[title.id]}
                      </Td>
                    ))}

                    {ShowAction(
                      actionsConfig(() => {}),
                      { ...entry, id: entry.staffId }
                    )}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr border="bottom">
                  <Td
                    colSpan={
                      actionsConfig(() => {}).length + titlesOptions.length
                    }
                    type="custom"
                    align="left"
                  >
                    <Pagination
                      firstEntryInPage={firstEntryInPage}
                      lastEntryInPage={lastEntryInPage}
                      totalRecords={filteredData.length}
                      handleStartPage={handleStartPage}
                      handlePrevPage={handlePrevPage}
                      handleNextPage={handleNextPage}
                      handleEndPage={handleEndPage}
                    />
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { PositionsUI };
