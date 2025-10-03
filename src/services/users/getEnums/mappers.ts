import { IUserEnumerators } from "@ptypes/users/tabs/userTab/addUser/enumerators";
import { IUserEnumItem } from "@ptypes/users/tabs/userTab/addUser/enumerators/enumeItem";

const mapEnumeratorsResponse = (
  data: Record<string, IUserEnumItem[]>
): IUserEnumerators[] => {
  return Object.entries(data).map(([key, items]) => ({
    key,
    items: items.map(
      (item, index): IUserEnumItem => ({
        code: item.code,
        value: item.value,
        description: item.description,
        i18n: item.i18n ?? {},
        index: item.index ?? index,
      })
    ),
  }));
};
export { mapEnumeratorsResponse };
