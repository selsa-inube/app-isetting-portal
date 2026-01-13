import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { mapBusinessUnitFromApi } from "./mappers";
import { IBusinessUnit } from "@src/types/authAndDataProvider/IBusinessUnit";

import { isettingIsaasAxiosInstance } from "@src/api/isettingIsaas";

const getBusinessUnits = async (
    businessManager: string
): Promise<IBusinessUnit[]> => {
    const config: AxiosRequestConfig = {
        headers: {
            "X-Action": "SearchBusinessUnitByBusinessManager",
        },
    };
    const queryParams = new URLSearchParams({
        businessManagerPublicCode: businessManager,
    });
    const data: IBusinessUnit[] = await getWithRetries<IBusinessUnit[]>(
        isettingIsaasAxiosInstance,
        `/business-unit/?${queryParams}`,
        config
    );
    console.log(data, "sadasas");
    return mapBusinessUnitFromApi(data);
};

export { getBusinessUnits };
