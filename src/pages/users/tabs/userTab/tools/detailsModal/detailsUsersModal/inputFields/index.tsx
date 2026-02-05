import { basic } from "@design/tokens";

import { useInputFields } from "@hooks/users/useInputFields";
import { Input, Grid, Fieldset } from "@inubekit/inubekit";
import { IInputFields } from "@ptypes/users/tabs/userTab/details/IInputFields";

const InputFields = (props: IInputFields) => {
  const { labels, infoData } = props;
  const sections = useInputFields({ labels, infoData });

  return (
    <>
      {Object.entries(sections).map(([sectionName, fields]) => (
        <Fieldset key={sectionName} legend={sectionName}>
          <Grid
            templateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
            gap={basic.spacing.s16}
            autoRows="auto"
            justifyContent="normal"
            width="100%"
          >
            {fields.map((field) => (
              <Input
                key={field.id}
                label={field.labelName}
                name={field.id}
                id={field.id}
                placeholder={field.labelName}
                value={field.fieldValue}
                fullwidth
                type="text"
                size="compact"
                disabled
              />
            ))}
          </Grid>
        </Fieldset>
      ))}
    </>
  );
};

export { InputFields };
