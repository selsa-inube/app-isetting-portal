import { IRolesByUnitEntry } from "@ptypes/assignments/assisted/IRolesByUnitEntry";

const hasValues = (
  values:  IRolesByUnitEntry[],
) => values && values.length > 0;

export { hasValues };
