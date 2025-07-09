import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { iportalStaffAxiosInstance } from "@api/iportalStaff";
import { IAssignmentsData } from "@ptypes/assignments/IAssignmentsData";
import { mapAssignmentsToEntities } from "./mappers/mapAssignmentsToEntities";

const getAssignmentsData = async (): Promise<IAssignmentsData[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllTemporaryAssignment",
    },
  };
  const data: IAssignmentsData[] = await getWithRetries<IAssignmentsData[]>(
    iportalStaffAxiosInstance,
    `/temporary-assignments`,
    config
  );

  return mapAssignmentsToEntities(data);
};

export { getAssignmentsData };
