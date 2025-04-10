import { enviroment } from "@config/environment";
import { IEnumerators } from "@ptypes/users/enumerators";
import { mapEnumeratorsEntities } from "./mappers";

const getEnumerators = async (
  enumeratorName: string,
  country: string
): Promise<IEnumerators[]> => {
  const queryParams = new URLSearchParams({
    country,
  });

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "GetEnum",
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const requestUrl = `${
      enviroment.IVITE_ISAAS_QUERY_PROCESS_SERVICE
    }/enumerators/${enumeratorName}/?${queryParams.toString()}`;

    const res = await fetch(requestUrl, options);
    if (res.status === 204) {
      return [];
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    return mapEnumeratorsEntities(data);
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getEnumerators };
