import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";
import { IRoleByBusinessUnit } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/ICardByBusinessUnit/IRoleByBusinessUnit";

import { IRolesByBusinessMapped } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/ICardByBusinessUnit/mapped";
import { IPositionByBusinessUnit } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/IRoleByBusinessUnit";

import { getBusinessManagersId } from "@services/staffPortal/getBusinessManagersId";
import { useEffect, useState } from "react";

const useRolesByBusinessUnit = (
  entriesAdditionalBusinessEntity: IFormEntry[]
) => {
  const [formData, setFormData] = useState<IRolesByBusinessMapped>({
    rolesByBusinessUnits: {},
    positionsByBusinessUnit: {},
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const activeEntries = entriesAdditionalBusinessEntity.filter(
      (entry) => entry.isActive
    );

    if (activeEntries.length === 0) {
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

        const rolesBusinessUnitsMapped: Record<string, IRoleByBusinessUnit> =
          {};
        const positionsBusinessUnitsMapped: Record<
          string,
          IPositionByBusinessUnit
        > = {};

        results.forEach(({ code, data }) => {
          rolesBusinessUnitsMapped[code] = {
            value: "",
            options: data.flatMap((item: IBusinessUnitsPortalStaff) =>
              item.positionStaffByRoles.map((role) => ({
                label: role.roleName,
                isActive: false,
              }))
            ),
          };
          rolesBusinessUnitsMapped;
          positionsBusinessUnitsMapped[code] = {
            value: "",
            options: data.map((item: IBusinessUnitsPortalStaff) => ({
              id: item.positionId,
              label: item.positionName,
              value: item.positionId,
            })),
          };
        });

        setFormData({
          rolesByBusinessUnits: rolesBusinessUnitsMapped,
          positionsByBusinessUnit: positionsBusinessUnitsMapped,
        });
      } catch (err) {
        console.error(err);
        setError("Failed to fetch roles");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [entriesAdditionalBusinessEntity]);

  const selectRolesByBusinessUnit = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      rolesByBusinessUnits: {
        ...prev.rolesByBusinessUnits,
        [name]: {
          ...prev.rolesByBusinessUnits[name],
          value,
        },
      },
    }));
  };
  const selectPositionsByBusinessUnit = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      positionsByBusinessUnit: {
        ...prev.positionsByBusinessUnit,
        [name]: {
          ...prev.positionsByBusinessUnit[name],
          value,
        },
      },
    }));
  };
  console.log(formData);
  return {
    rolesByBusinessUnit: formData.rolesByBusinessUnits,
    positionsByBusinessUnit: formData.positionsByBusinessUnit,
    loading,
    error,
    selectRolesByBusinessUnit,
    selectPositionsByBusinessUnit,
  };
};

export { useRolesByBusinessUnit };
