import { useEffect, useState } from "react";

import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";
import { getBusinessManagersId } from "@services/staffPortal/getBusinessManagersId";
import { PositionsByBusinessUnitMap } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/IPositionByBusinessUnit";
import { IUseOptionsBusinessEntity } from "@src/types/hooks/IUseOptionsBusinessEntity";

const useRolesByBusinessUnit = (props: IUseOptionsBusinessEntity) => {
  const { setFormValues, activeEntries } = props;
  const [rolesByBusinessUnit, setRolesByBusinessUnit] = useState<IFormEntry[]>(
    []
  );

  const [positionsByBusinessUnit, setPositionsByBusinessUnit] =
    useState<PositionsByBusinessUnitMap>({});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (!activeEntries || activeEntries.length === 0) {
      setRolesByBusinessUnit([]);
      setPositionsByBusinessUnit({});
      return;
    }

    const fetchAll = async () => {
      try {
        setLoading(true);
        setError(null);

        const results = await Promise.all(
          activeEntries.map(async (entry) => {
            const data = await getBusinessManagersId(entry.value);
            return { code: entry.value, data };
          })
        );

        const positionsMap: PositionsByBusinessUnitMap = {};
        const rolesEntries: IFormEntry[] = [];

        results.forEach(({ code, data }) => {
          positionsMap[code] = {
            value: "",
            options: data.map((item: IBusinessUnitsPortalStaff) => ({
              id: item.positionId,
              label: item.positionName,
              value: item.positionId,
            })),
          };

          data.forEach((item: IBusinessUnitsPortalStaff) => {
            item.positionStaffByRoles.forEach((role) => {
              rolesEntries.push({
                id: `${code}-${role.positionId}`,
                value: code,
                isActive: true,
                rolesStaff: role.roleName,
                businessUnitCode: code,
                positionId: item.positionId,
                positionName: item.positionName,
              });
            });
          });
        });

        setPositionsByBusinessUnit(positionsMap);
        setRolesByBusinessUnit(rolesEntries);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch roles");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [activeEntries]);

  const selectPositionsByBusinessUnit = (name: string, value: string) => {
    setPositionsByBusinessUnit((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
      },
    }));
  };

  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      positionByBusinessUnitStep: [positionsByBusinessUnit],
    }));
  }, [positionsByBusinessUnit, setFormValues]);

  useEffect(() => {
    const activeRoles = rolesByBusinessUnit.filter((role) => role.isActive);

    setFormValues((prev) => ({
      ...prev,
      roleByBusinessUnitStep: activeRoles,
    }));
  }, [rolesByBusinessUnit, setFormValues]);

  return {
    rolesByBusinessUnit,
    setRolesByBusinessUnit,
    positionsByBusinessUnit,
    loading,
    error,
    selectPositionsByBusinessUnit,
  };
};

export { useRolesByBusinessUnit };
