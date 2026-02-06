import { Fieldset, Text } from "@inubekit/inubekit";
import { useTableData } from "@hooks/positions/useTableView";
import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { DetailsPosition } from "@config/positions/details";
import { ITabllePositions } from "@ptypes/positions/details/ITabllePositions";

const TableView = (props: ITabllePositions) => {
  const { dataTable } = props;
  const { rows } = useTableData({ dataTable });
  if (!rows || rows.length === 0) return null;

  return (
    <Fieldset legend={DetailsPosition.rol} spacing="wide">
      <BorderStack direction="column" gap={basic.spacing.s100} width="100%">
        {rows.map((row) => (
          <BorderStack
            key={row._rowKey}
            direction="column"
            background={EComponentAppearance.LIGHT}
            padding={`${basic.spacing.s075} ${basic.spacing.s200}`}
            borderRadius={basic.spacing.s8}
          >
            <Text
              size="medium"
              type="label"
              weight="bold"
              appearance={EComponentAppearance.DARK}
            >
              {row.roles}
            </Text>
          </BorderStack>
        ))}
      </BorderStack>
    </Fieldset>
  );
};

export { TableView };
