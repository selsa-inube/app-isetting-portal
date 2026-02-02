import { Stack, Textfield, Text } from "@inubekit/inubekit";
import { MdSearch } from "react-icons/md";

import { breakPoints } from "@config/positionsTabs/table";
import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";

import { Table } from "@design/table";
import { IRequestInProgressTabUI } from "@ptypes/users/tabs/inProgress/requestInProgressTabUI";
import { tabLabels } from "@config/tabLabels";

const RequestInProgressUI = (props: IRequestInProgressTabUI) => {
  const {
    searchService,
    handleSearchService,
    titles,
    loading,
    entries,
    columnWidths,
    actions,
  } = props;

  return (
    <BorderStack
      border={EComponentAppearance.DARK}
      borderRadius={basic.spacing.s100}
      padding={basic.spacing.s300}
      gap={basic.spacing.s250}
      boxSizing="border-box"
      direction="column"
    >
      <Stack gap={basic.spacing.s250}>
        <Textfield
          name="searchRequestProgress"
          id="searchRequestProgress"
          placeholder={tabLabels.placeholderSearch}
          type="search"
          iconAfter={<MdSearch />}
          size="wide"
          label={tabLabels.search}
          value={searchService}
          onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
            handleSearchService(value)
          }
        />
      </Stack>
      <Text
        type="title"
        size="medium"
        appearance={EComponentAppearance.DARK}
        weight="normal"
      >
        {tabLabels.description}
      </Text>
      <Table
        id="portal"
        titles={titles}
        entries={entries}
        actions={actions}
        breakpoints={breakPoints}
        filter={searchService}
        loading={loading}
        columnWidths={columnWidths}
      />
    </BorderStack>
  );
};

export { RequestInProgressUI };
