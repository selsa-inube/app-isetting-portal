import { AxiosRequestConfig } from "axios";
import { isettingIsaasAxiosInstance } from "@api/isettingIsaas";
import { patchWithRetries } from "@services/core/patchWithRetries";
import { mapAddUsersToApi } from "../addUsers/postAddUsers/mappers";
import { IRequestUsers } from "@ptypes/users/tabs/userTab/addUser/IRequestUsers";

const patchUsers = async (
  businessUnit: string,
  user: string,
  data: IRequestUsers,
  businessManagerCode: string,
  token: string,
): Promise<IRequestUsers> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "ModifyStaff",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
      Authorization: token,
    },
  };
  const newData = await patchWithRetries<IRequestUsers>(
    `/staffs`,
    config,
    mapAddUsersToApi(data, businessManagerCode) as unknown as string[],
    isettingIsaasAxiosInstance,
  );

  return newData;
};

export { patchUsers };
