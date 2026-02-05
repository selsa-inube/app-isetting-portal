import { AxiosRequestConfig } from "axios";
import { mapDeleteUsersToApi } from "./mappers";
import { deleteWithRetries } from "@services/core/deleteWithRetries";

import { isettingIsaasHttp } from "@api/isettingIsaas/commands";
import { ISaveDeleteUsers } from "@ptypes/users/tabs/userTab/deleteUser/IRequestDeleteUser";

const deleteUser = async (
  businessUnit: string,
  user: string,
  data: ISaveDeleteUsers,
  token: string,
): Promise<ISaveDeleteUsers> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "RemoveStaff",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
      Authorization: token,
    },
  };
  const newData = await deleteWithRetries<ISaveDeleteUsers>(
    `/staff`,
    config,
    mapDeleteUsersToApi(data) as unknown as string[],
    isettingIsaasHttp,
  );

  return newData;
};

export { deleteUser };
