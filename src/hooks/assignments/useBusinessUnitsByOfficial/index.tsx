import { useContext, useEffect, useState } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { getIportalStaffUsers } from "@services/users/getIportalStaffUsers";
import { IUsers } from "@ptypes/users/usersTable/IUsers";
import { getAllBusinessUnits } from "@services/staffPortal/getAllBusinessUnits";
import { IAllBusinessUnits } from "@ptypes/staffPortal/IAllBusinessUnits";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { getUnitsByAbsentOfficial } from "@utils/getUnitsByAbsentOfficial";
import { IUseUnitsByAbsentOfficial } from "@ptypes/hooks/IUseUnitsByAbsentOfficial";

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

  useEffect(() => {
    if (unitsByAbsentOfficial.length > 0) {
      const data = getUnitsByAbsentOfficial(
        absentOfficial,
        unitsByAbsentOfficial
      );

      setOptions(data);
    }
  }, [unitsByAbsentOfficial]);

  useEffect(() => {
    if (businessUnits.length > 0) {
      const businessUnitsData = businessUnits.map((unit) => ({
        id: ` ${unit.publicCode}-${unit.abbreviatedName}`,
        publicCode: unit.publicCode,
        value: unit.abbreviatedName,
        isActive: false,
        roleName: "",
        positionName: "",
      }));

      setOptions(businessUnitsData);
    }
  }, [businessUnits]);

  return {
    options,
    hasError,
  };
};
export { UseBusinessUnitsByOfficial };
