import { Size } from "@ptypes/select/selectbusinessUnit/Istatus";

const getTypo = (size: Size) => {
  if (size === "compact") {
    return "medium";
  }
  return "large";
};
export { getTypo };
