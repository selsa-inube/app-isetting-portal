import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IInputFields } from "@ptypes/users/tabs/userTab/details/IInputFields";

const useInputFields = (props: IInputFields) => {
  const { labels, infoData } = props;

  const result: Record<
    string,
    { id: string; labelName: string; fieldValue: string }[]
  > = {};

  Object.entries(labels).forEach(([section, fields]) => {
    result[section] = fields
      .map((field) => {
        const { id, labelName } = field;
        const fieldValue = infoData[id as keyof IPosition];

        if (fieldValue === undefined || fieldValue === null) return null;

        return {
          id,
          labelName,
          fieldValue,
        };
      })
      .filter(Boolean) as {
      id: string;
      labelName: string;
      fieldValue: string;
    }[];
  });

  return result;
};

export { useInputFields };
