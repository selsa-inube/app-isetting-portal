import { DetailsPosition } from "@config/positions/details";
import { BorderStack } from "@design/modals/borderStack";
import { basic } from "@design/tokens";
import { UseTableData } from "@hooks/positions/useTableView";
import { Fieldset, inube, Text } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { ITabllePositions } from "@ptypes/positions/details/ITabllePositions";

const TableView = (props: ITabllePositions) => {
  const { dataTable } = props;
  const { rows } = UseTableData(dataTable);

  if (!rows || rows.length === 0) return null;

  return (
    <Fieldset legend={DetailsPosition.rol} size="small" type="title">
      <BorderStack direction="column" gap="8px" width="100%">
        {rows.map((row, rowIndex) =>
          row.map(({ key, value }) => (
            <BorderStack
              direction="column"
              background={inube.palette.neutral.N10}
              key={`${rowIndex}-${key}`}
              padding={`${basic.spacing.s075} ${basic.spacing.s200}`}
              borderRadius={basic.spacing.s8}
            >
              <Text
                size="medium"
                type="label"
                weight="bold"
                appearance={ComponentAppearance.DARK}
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
