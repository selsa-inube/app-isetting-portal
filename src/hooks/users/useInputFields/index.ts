import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IInputFields } from "@ptypes/users/tabs/userTab/details/IInputFields";
import { formatDate } from "@utils/date/formatDate";

const useInputFields = (props: IInputFields) => {
  const { labels, infoData } = props;

  const getValueByPath = (obj: IPosition, path: string): unknown => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  const result: Record<
    string,
    { id: string; labelName: string; fieldValue: string }[]
  > = {};

  Object.entries(labels).forEach(([section, fields]) => {
    result[section] = fields
      .map((field) => {
        const { id, labelName } = field;

        let fieldValue = getValueByPath(infoData, id);

        if (fieldValue === undefined || fieldValue === null) return null;

        if (id === "birthDay" && typeof fieldValue === "string") {
          fieldValue = formatDate(new Date(fieldValue));
        }

        return {
          id,
          labelName,
          fieldValue: String(fieldValue),
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
