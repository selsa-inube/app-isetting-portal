import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";

import { useInputFields } from "@hooks/users/useInputFields";
import { Grid, Fieldset, Text } from "@inubekit/inubekit";
import { IInputFields } from "@ptypes/users/tabs/userTab/details/IInputFields";

const InputFields = (props: IInputFields) => {
  const { labels, infoData } = props;
  const sections = useInputFields({ labels, infoData });
  return (
    <>
      {Object.entries(sections).map(([sectionName, fields]) => (
        <Fieldset key={sectionName} legend={sectionName}>
          <Grid
            templateColumns={
              sectionName === "Misión para el operador"
                ? "1fr"
                : "repeat(auto-fit, minmax(300px, 1fr))"
            }
            gap={basic.spacing.s16}
            autoRows="auto"
            justifyContent="normal"
            width="100%"
          >
            {fields.map((field) => (
              <BorderStack
                key={field.labelName}
                direction="column"
                background={EComponentAppearance.GRAY}
                border={EComponentAppearance.GRAY}
                gap={basic.spacing.s4}
                borderRadius={basic.spacing.s100}
                padding={`${basic.spacing.s075} ${basic.spacing.s200}`}
              >
                <Text
                  size="medium"
                  type="label"
                  weight="bold"
                  appearance={EComponentAppearance.DARK}
                >
                  {field.labelName}
                </Text>
                <Text size="medium" appearance={EComponentAppearance.GRAY}>
                  {field.fieldValue}
                </Text>
              </BorderStack>
            ))}
          </Grid>
        </Fieldset>
      ))}
    </>
  );
};

export { InputFields };
