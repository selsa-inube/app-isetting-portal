import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import {
  Stack,
  Breadcrumbs,
  Textfield,
  Button,
  Icon,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Table } from "@design/table";
import { actionsConfig, breakPoints, titles } from "@config/users/table";
import { PageTitle } from "@design/label/PageTitle";
import { IUsersUI } from "@ptypes/users/usersTable/IUsersUI";
import { Menu } from "@design/navigation";
import { menuUserLinks } from "@config/users/menuInvitation";
import { StyledContainer } from "./styles";
import { useEffect } from "react";
import { getEnumerators } from "@services/users/getEnumerators/getBiologicalSex";

const UsersUI = (props: IUsersUI) => {
  const {
    data,
    smallScreen,
    handleSearchPositions,
    searchPosition,
    entries,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    loading,
    widthFirstColumn,
  } = props;
  useEffect(() => {
    (async () => {
      const result = await getEnumerators("biologicalsex", "Colombia");
      console.log(result);
    })();
  }, []);

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${basic.spacing.s200}`
          : `${basic.spacing.s400} ${basic.spacing.s800}`
      }
      gap={basic.spacing.s300}
    >
      <Stack gap={basic.spacing.s600} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          {data && (
            <>
              <Breadcrumbs crumbs={data?.crumbs ?? []} />
              <PageTitle
                title={data.label}
                description={data.description}
                navigatePage="/privileges"
              />
            </>
          )}
        </Stack>
      </Stack>

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
                options={menuUserLinks}
                handleClose={handleCloseMenuInvitation}
              />
            )}
          </StyledContainer>
        ) : (
          <Button
            iconBefore={<MdPersonAddAlt />}
            spacing="wide"
            type="link"
            path="/privileges/users/add-users"
          >
            Agregar Usuario
          </Button>
        )}
      </Stack>
      <Table
        id="portal"
        titles={titles}
        entries={entries}
        actions={actionsConfig()}
        breakpoints={breakPoints}
        filter={(() => "")()}
        isLoading={loading}
        columnWidths={[widthFirstColumn, 55, 23]}
      />
    </Stack>
  );
};

export { UsersUI };
