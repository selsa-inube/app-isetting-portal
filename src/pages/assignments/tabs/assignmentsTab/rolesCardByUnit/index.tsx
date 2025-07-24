import { Button, Divider, Stack, Text } from "@inubekit/inubekit";

import { ToggleGroup } from "@design/forms/assignmentForm/toggleGroup";
import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { IRolesCardByUnit } from "@ptypes/assignments/IRolesCardByUnit";

const RolesCardByUnit = (props: IRolesCardByUnit) => {
  const {
    id,
    businessUnit,
    roles,
    actionButton,
    iconButton,
    onButtonClick,
    onSelectCheckChange,
  } = props;

  return (
    <BorderStack
      direction="column"
      gap={basic.spacing.s150}
      border={EComponentAppearance.DARK}
      boxSizing="border-box"
      width="200px"
      height="fit-content"
      borderRadius={basic.spacing.s100}
      padding={basic.spacing.s200}
    >
      <Text type="title" weight="bold" size="large" textAlign="center">
        {businessUnit}
      </Text>
      <Divider />

      <Stack
        padding={basic.spacing.s200}
        direction="column"
        gap={basic.spacing.s250}
      >
        <ToggleGroup
          entries={roles}
          onSelectCheckChange={onSelectCheckChange}
          size="large"
        />
      </Stack>

      <Button
        onClick={() => onButtonClick(id)}
        appearance={EComponentAppearance.GRAY}
        iconBefore={iconButton}
        variant="outlined"
        fullwidth
      >
        {actionButton}
      </Button>
    </BorderStack>
  );
};

export { RolesCardByUnit };
