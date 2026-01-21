import { useEffect, useState } from "react";
import { getRolesByBusinessUnit } from "@services/staffPortal/getRolesByBusinessUnit";
import { IUseGetBusinessUnits } from "@ptypes/hooks/IUseGetBusinessUnits";

const useGetBusinessUnits = (props: IUseGetBusinessUnits) => {
  const { businessUnits, token } = props;
  const unitsData = businessUnits.map(
    (businessUnit) => businessUnit.publicCode,
  );

  const [roles, setRoles] = useState<{ [key: string]: string[] }>({});
  const [businessUnitsData, setBusinessUnitsData] = useState<
    {
      id: string;
      publicCode: string;
      value: string;
      isActive: boolean;
      roleNames: string[];
    }[]
  >([]);

  const fetchRolesData = async (businessUnitCode: string) => {
    try {
      return await getRolesByBusinessUnit(businessUnitCode, token);
    } catch (error) {
      console.info(error);
    }
  };

  useEffect(() => {
    for (const businessUnitCode of unitsData) {
      fetchRolesData(businessUnitCode).then((resultado) => {
        setRoles((prev) => ({
          ...prev,
          [businessUnitCode]: resultado?.map((item) => item.roleName) || [],
        }));
      });
    }
  }, [businessUnits]);

  useEffect(() => {
    setBusinessUnitsData(
      businessUnits.map((unit) => ({
        id: `${unit.publicCode}-${unit.abbreviatedName}`,
        publicCode: unit.publicCode,
        value: unit.abbreviatedName,
        isActive: false,
        roleNames: roles[unit.publicCode],
      })),
    );
  }, [roles]);

  return {
    fetchRolesData,
    businessUnitsData,
  };
};

export { useGetBusinessUnits };
