import { DetailsPosition } from "@config/positions/details";
import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { UseTableData } from "@hooks/positions/useTableView";
import { Fieldset, Text } from "@inubekit/inubekit";
import { ITabllePositions } from "@ptypes/positions/details/ITabllePositions";

const TableView = (props: ITabllePositions) => {
  const { dataTable } = props;
  const { rows } = UseTableData(dataTable);

  if (!rows || rows.length === 0) return null;

  return (
    <Fieldset legend={DetailsPosition.rol} size="small" type="title">
      <BorderStack direction="column" gap={basic.spacing.s100} width="100%">
        {rows.map((row, rowIndex) =>
          row.map(({ key, value }) => (
            <BorderStack
              direction="column"
              background={EComponentAppearance.LIGHT}
              key={`${rowIndex}-${key}`}
              padding={`${basic.spacing.s075} ${basic.spacing.s200}`}
              borderRadius={basic.spacing.s8}
            >
              <Text
                size="medium"
                type="label"
                weight="bold"
                appearance={EComponentAppearance.DARK}
              >
                {value}
              </Text>
            </BorderStack>
          ))
        )}
      </BorderStack>
    </Fieldset>
  );
};

export { TableView };
