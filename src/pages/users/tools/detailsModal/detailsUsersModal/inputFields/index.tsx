import { useInputFields } from "@hooks/users/useInputFields";
import { Input } from "@inubekit/inubekit";
import { IInputFields } from "@ptypes/users/details/IInputFields";

const InputFields = (props: IInputFields) => {
  const { labels, infoData } = props;
  const fields = useInputFields({ labels, infoData });

  return (
    <>
      {fields.map((field) =>
        field ? (
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
          />
        ) : null
      )}
    </>
  );
};

export { InputFields };
