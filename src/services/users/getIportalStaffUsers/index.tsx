import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { isettingIsaasAxiosInstance } from "@api/isettingIsaas";
import { IUsers } from "@ptypes/users/tabs/userTab/usersTable/IUsers";
import { mapUsersPortalStaffEntities } from "./mappers";

const getIportalStaffUsers = async (
  businessManager: string,
  token: string,
): Promise<IUsers[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllStaff",
      Authorization: token,
    },
  };
  const queryParams = new URLSearchParams({
    publicCode: businessManager,
  });
  const data: IUsers[] = await getWithRetries<IUsers[]>(
    isettingIsaasAxiosInstance,
    `/staffs?${queryParams.toString()}`,
    config,
  );
  return Array.isArray(data) ? mapUsersPortalStaffEntities(data) : [];
};

export { getIportalStaffUsers };
