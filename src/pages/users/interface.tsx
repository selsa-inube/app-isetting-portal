import { MdPersonAddAlt, MdSearch } from "react-icons/md";
import { Stack, Breadcrumbs, Textfield, Button } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Table } from "@design/table";
import { actionsConfig, breakPoints, titles } from "@config/users/table";
import { PageTitle } from "@design/label/PageTitle";
import { IUsersUI } from "@ptypes/users/usersTable/IUsersUI";

const UsersUI = (props: IUsersUI) => {
  const {
    data,
    smallScreen,
    handleSearchPositions,
    searchPosition,
    entries,
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

        <Button
          iconBefore={<MdPersonAddAlt />}
          spacing="wide"
          type="link"
          path="/privileges/users"
        >
          Invitar usuario
        </Button>
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
