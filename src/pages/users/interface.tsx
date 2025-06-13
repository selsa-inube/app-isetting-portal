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
import { UserbuttonText } from "@config/users/addUsers/assisted/buttonText";
import { crumbsUsers } from "@config/users/navigation";
import { usersTitle } from "@config/users/usersTitle";

const UsersUI = (props: IUsersUI) => {
  const {
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
              <Breadcrumbs crumbs={crumbsUsers} />
              <PageTitle
                title={usersTitle.title}
                description={usersTitle.description}
                navigatePage="/privileges"
              />
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
            path="/privileges/users"
          >
            {UserbuttonText.buttonAddUsers}
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
        loading={loading}
        columnWidths={[widthFirstColumn, 55, 23]}
      />
    </Stack>
  );
};

export { UsersUI };
