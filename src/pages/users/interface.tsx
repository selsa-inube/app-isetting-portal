import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import {
  Stack,
  Breadcrumbs,
  Textfield,
  Button,
  Icon,
  Text,
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Table } from "@design/table";
import { actionsConfig } from "@config/users/tableUsers";
import { PageTitle } from "@design/label/PageTitle";
import { Menu } from "@design/navigation";
import { menuUserLinks } from "@config/users/menuInvitation";
import { UserbuttonText } from "@config/users/addUsers/assisted/buttonText";
import { crumbsUsers } from "@config/users/navigation";
import { usersTitle } from "@config/users/usersTitle";
import { IUsersUI } from "@ptypes/users/usersTable/IUsersUI";
import { StyledContainer } from "./styles";
import { BorderStack } from "@design/layout/borderStack";
import { breakPointsUsers } from "@config/users/tableUsers/breakPoints";
import { titlesUsers } from "@config/users/tableUsers/titles";

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
    columnWidths,
    title,
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
            title={title}
            description={usersTitle.description}
            navigatePage="/"
          />
        </Stack>
      </Stack>
      <BorderStack
        border="dark"
        borderRadius={basic.spacing.s100}
        direction="column"
        gap={basic.spacing.s20}
        padding={basic.spacing.s24}
      >
        <Stack justifyContent="space-between" alignItems="center">
          <Textfield
            name="searchPositions"
            id="searchPositions"
            placeholder="Palabra clave"
            type="search"
            iconBefore={<MdSearch />}
            size="compact"
            label="Buscar"
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
              path="/users"
            >
              {UserbuttonText.buttonAddUsers}
            </Button>
          )}
        </Stack>
        <Text>{UserbuttonText.labelTab}</Text>
        <Table
          id="portal"
          titles={titlesUsers}
          entries={entries}
          actions={actionsConfig()}
          breakpoints={breakPointsUsers}
          filter={searchPosition}
          loading={loading}
          columnWidths={columnWidths}
        />
      </BorderStack>
    </Stack>
  );
};

export { UsersUI };
