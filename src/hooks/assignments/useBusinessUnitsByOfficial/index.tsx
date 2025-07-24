import { useContext, useEffect, useState } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { getIportalStaffUsers } from "@services/users/getIportalStaffUsers";
import { getAllBusinessUnits } from "@services/staffPortal/getAllBusinessUnits";
import { useGetUnitsByAbsentOfficial } from "@hooks/assignments/useGetUnitsByAbsentOfficial";
import { IUsers } from "@ptypes/users/usersTable/IUsers";
import { IAllBusinessUnits } from "@ptypes/staffPortal/IAllBusinessUnits";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { IUseUnitsByAbsentOfficial } from "@ptypes/hooks/IUseUnitsByAbsentOfficial";
import { useGetBusinessUnits } from "../useGetBusinessUnits";

const UseBusinessUnitsByOfficial = (props: IUseUnitsByAbsentOfficial) => {
  const { absentOfficial } = props;
  const { appData } = useContext(AuthAndData);

  const [unitsByAbsentOfficial, setUnitsByAbsentOfficial] = useState<IUsers[]>(
    []
  );
  const [hasError, setHasError] = useState<boolean>(false);
  const [businessUnits, setBusinessUnits] = useState<IAllBusinessUnits[]>([]);
  const [options, setOptions] = useState<IBusinessEntry[]>([]);

  const fetchAllStaffData = async () => {
    try {
      const data = await getIportalStaffUsers(
        appData.businessManager.publicCode
      );
      setUnitsByAbsentOfficial(data);
    } catch (error) {
      console.info(error);
      setHasError(true);
    }
  };

  const fetchBusinessUnits = async () => {
    try {
      const data = await getAllBusinessUnits();
      setBusinessUnits(data);
    } catch (error) {
      console.info(error);
      setHasError(true);
    }
  };

  useEffect(() => {
    if (absentOfficial.length > 0) {
      fetchAllStaffData();
    } else {
      fetchBusinessUnits();
    }
  }, []);

  const { staffByUnitsData } = useGetUnitsByAbsentOfficial({
    absentOfficial,
    unitsByAbsentOfficial
  }) as { staffByUnitsData: IBusinessEntry[] };

  useEffect(() => {
    if (unitsByAbsentOfficial.length > 0) {
      setOptions(staffByUnitsData);
    }
  }, [unitsByAbsentOfficial]);

  const { businessUnitsData } = useGetBusinessUnits({businessUnits});

  useEffect(() => {
    if (businessUnits.length > 0 && businessUnitsData) {
      setOptions(businessUnitsData);
    }
  }, [businessUnits, businessUnitsData]);

  return {
    options,
    hasError,
  };
};
export { UseBusinessUnitsByOfficial };
