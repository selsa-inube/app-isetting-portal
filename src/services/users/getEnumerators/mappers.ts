import { IEnumerators } from "@ptypes/users/enumerators";

const mapEnumeratorsEntity = (
  enumerators: Record<string, string | number | object>
): IEnumerators => {
  const builEnumerators: IEnumerators = {
    code: String(enumerators.code),
    value: String(enumerators.value),
    description: String(enumerators.description),
  };
  return builEnumerators;
};

const mapEnumeratorsEntities = (
  resend: Record<string, string | number | object>[]
): IEnumerators[] => {
  return resend.map(mapEnumeratorsEntity);
};

export { mapEnumeratorsEntity, mapEnumeratorsEntities };
