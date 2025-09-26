import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IInputFields } from "@ptypes/users/tabs/userTab/details/IInputFields";

const useInputFields = (props: IInputFields) => {
  const { labels, infoData } = props;
  return (labels.length ? labels : Object.keys(infoData))
    .map((field) => {
      const { id, labelName } =
        typeof field === "string" ? { id: field, labelName: field } : field;

      const fieldValue = infoData[id as keyof IPosition];

      if (!fieldValue) return null;

      return {
        id,
        labelName,
        fieldValue,
      };
    })
    .filter(Boolean);
};

export { useInputFields };
