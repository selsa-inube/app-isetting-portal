import { BorderStack } from "@design/layout/borderStack";
import { breakPointsUsers } from "@config/users/tableUsers/breakPoints";
import { titlesUsers } from "@config/users/tableUsers/titles";

import { Table } from "@design/table";
import { actionsConfig } from "@config/users/tableUsers";
import { UserbuttonText } from "@config/users/addUsers/assisted/buttonText";
import { basic } from "@design/tokens";
import { Stack, Textfield, Icon, Button, Text } from "@inubekit/inubekit";
import { MdAdd, MdOutlineInfo, MdSearch } from "react-icons/md";
import { IUserTabUI } from "@ptypes/users/tabs/userTab/IUserTabUI";
import { EComponentAppearance } from "@enum/appearances";
import { DecisionModal } from "@design/modals/decisionModal";
import { disabledModal } from "@config/disabledModal";
import { portalId } from "@config/portalId";
const UserTabUI = (props: IUserTabUI) => {
  const {
    searchService,
    handleSearchService,
    loading,
    entries,
    setEntryDeleted,
    smallScreen,
    disabledButton,
    showInfoModal,
    handleToggleInfoModal,
    path,
    columnWidths,
  } = props;

  return (
    <BorderStack
      border={EComponentAppearance.DARK}
      borderRadius={basic.spacing.s100}
      direction="column"
      gap={basic.spacing.s20}
      padding={basic.spacing.s24}
    >
      <Stack justifyContent="space-between" alignItems="center">
        <Textfield
          name="searchUsers"
          id="searchUsers"
          placeholder="Palabra clave"
          type="search"
          iconBefore={<MdSearch />}
          size="compact"
          label="Buscar"
          value={searchService}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearchService(e)
          }
        />

        {!smallScreen && (
          <Stack alignItems="center">
            <Button
              iconBefore={<MdAdd />}
              spacing="wide"
              type="link"
              path={path}
              disabled={disabledButton}
            >
              {UserbuttonText.buttonAddUsers}
            </Button>
            {disabledButton && (
              <Icon
                appearance={EComponentAppearance.PRIMARY}
                icon={<MdOutlineInfo />}
                onClick={handleToggleInfoModal}
                cursorHover
                size="14px"
              />
            )}
          </Stack>
        )}
      </Stack>
      <Text>{UserbuttonText.labelTab}</Text>
      <Table
        id="portal"
        titles={titlesUsers}
        entries={entries}
        actions={actionsConfig(setEntryDeleted)}
        breakpoints={breakPointsUsers}
        filter={searchService}
        loading={loading}
        columnWidths={columnWidths}
      />
      {showInfoModal && (
        <DecisionModal
          portalId={portalId}
          title={disabledModal.title}
          actionText={disabledModal.actionText}
          description={disabledModal.description}
          subtitle={disabledModal.subtitle}
          onCloseModal={handleToggleInfoModal}
          onClick={handleToggleInfoModal}
          withCancelButton={false}
        />
      )}
    </BorderStack>
  );
};

export { UserTabUI };
