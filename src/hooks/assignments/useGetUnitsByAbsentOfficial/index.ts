import { IGroupedStaffByUnit } from "@ptypes/assignments/assisted/IGroupedStaffByUnit";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { IUseGetUnitsByAbsentOfficial } from "@ptypes/hooks/IUseGetUnitsByAbsentOfficial";

const useGetUnitsByAbsentOfficial = (props: IUseGetUnitsByAbsentOfficial) => {
  const { absentOfficial, unitsByAbsentOfficial } = props;

  if (!Array.isArray(unitsByAbsentOfficial)) {
    return [];
  }

  const official = absentOfficial ? absentOfficial.trim().split(" ") : [];

  if (official.length < 2) {
    return [];
  }

  let staffName: string = official[0];
  let staffLastName: string = official[1];

  if (official.length === 3) {
    staffName = `${official[0]} ${official[1]}`;
    staffLastName =`${official[2]}`;
  }

  if (official.length >= 4) {
    staffName = `${official[0]} ${official[1]}`;
    staffLastName =`${official[2]} ${official[3]}`;
  }

  const dataUnit = unitsByAbsentOfficial.find(
    (official) =>
      official.staffName === staffName &&
      official.staffLastName === staffLastName
  );

  if (!dataUnit || !dataUnit.staffByBusinessUnitAndRole) {
    return [];
  }

  const groupByBusinessUnitCode = dataUnit.staffByBusinessUnitAndRole.reduce(
    (role, current) => {
      const key = current.businessUnitCode;

      if (!role[key]) {
        role[key] = {
          roleNames: [current.roleName],
        };
      } else {
        if (!role[key].roleNames.includes(current.roleName)) {
          role[key].roleNames.push(current.roleName);
        }
      }

      return role;
    },
    {} as Record<string, IGroupedStaffByUnit>
  );

  const staffByUnitsData: IBusinessEntry[] = Array.from(
    new Map(
      dataUnit.staffByBusinessUnitAndRole.map((unit) => [
        unit.businessUnitCode,
        {
          id: `${unit.staffId}-${unit.businessUnitCode}`,
          publicCode: unit.businessUnitCode,
          value: unit.businessUnitName,
          isActive: false,
          roleNames: groupByBusinessUnitCode[unit.businessUnitCode].roleNames,
        },
      ])
    ).values()
  );

  return {
    staffByUnitsData,
  };
};

export { useGetUnitsByAbsentOfficial };
