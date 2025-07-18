import { IEnumerators } from "@ptypes/IEnumerators";
import { IServerDomain } from "@ptypes/IServerDomain";

const optionsFromEnumerators = (options: IEnumerators[]): IServerDomain[] =>
  options.map((item) => {
    return {
      id: item.id ?? "",
      label: item.code,
      value: item.value ?? "",
    };
  });

export { optionsFromEnumerators };
