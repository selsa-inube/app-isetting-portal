import { Divider, Select, Text } from "@inubekit/inubekit";

import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { selectPlaceholder } from "@config/users/addUsers/form/rolesCardByBusinessUnit";
import { IPositionCardByBusinessUnit } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/ICardByBusinessUnit";

const PositionCardByBusinessUnit = (props: IPositionCardByBusinessUnit) => {
  const { id, businessUnit, options = [], onSelectChange, value = "" } = props;

  return (
    <BorderStack
      direction="column"
      gap={basic.spacing.s150}
      border={EComponentAppearance.DARK}
      boxSizing="border-box"
      width="292px"
      height="fit-content"
      borderRadius={basic.spacing.s100}
      padding={basic.spacing.s200}
      boxShadow={`2px 2px 3px 0px`}
    >
      <Text
        type="title"
        weight="bold"
        size="large"
        textAlign="center"
        appearance="gray"
      >
        {businessUnit}
      </Text>
      <Divider />

      <Select
        id={id}
        label="Cargo"
        name={id}
        onChange={onSelectChange}
        options={options}
        value={value}
        placeholder={selectPlaceholder}
      />
    </BorderStack>
  );
};

export { PositionCardByBusinessUnit };
