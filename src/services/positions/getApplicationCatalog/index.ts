import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { isaasQueryAxiosInstance } from "@api/isaas";
import { IAplicationCatalog } from "@ptypes/applicationCatalog";
import { mapApplicationEntities } from "./mappers";

const getApplicationCatalog = async (): Promise<IAplicationCatalog[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllApplicationCatalog",
    },
  };
  const data: IAplicationCatalog[] = await getWithRetries<IAplicationCatalog[]>(
    isaasQueryAxiosInstance,
    `/application-catalog`,
    config
  );

  return mapApplicationEntities(data);
};

export { getApplicationCatalog };
