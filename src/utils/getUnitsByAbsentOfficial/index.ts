import { IUsers } from "@ptypes/users/usersTable/IUsers";

const getUnitsByAbsentOfficial = (
  absentOfficial: string,
  unitsByAbsentOfficial: IUsers[]
) => {
  if (!Array.isArray(unitsByAbsentOfficial)) {
    console.error("unitsByAbsentOfficial debe ser un array");
    return [];
  }

  const official = absentOfficial.trim().split(" ");

  if (official.length < 2) {
    console.error("absentOfficial debe contener al menos nombre y apellido");
    return [];
  }

  const staffName = official[0];
  const staffLastName = official[1];

  const dataUnit = unitsByAbsentOfficial.find(
    (official) =>
      official.staffName === staffName &&
      official.staffLastName === staffLastName
  );

  if (!dataUnit || !dataUnit.staffByBusinessUnitAndRole) {
    return [];
  }

  const staffByUnitsData = dataUnit.staffByBusinessUnitAndRole.map((unit) => ({
    id: `${unit.staffId}-${unit.businessUnitCode}`,
    publicCode: unit.businessUnitCode,
    value: unit.businessUnitCode,
    isActive: false,
    roleName: unit.roleName,
    positionName: unit.positionName,
  }));

  return staffByUnitsData;
};

export { getUnitsByAbsentOfficial };
