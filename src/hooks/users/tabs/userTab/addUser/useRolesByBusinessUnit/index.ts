import { BusinessUnitField } from "@pages/users/tabs/userTab/addUser/forms/rolesByBusinessUnit";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";

import { getBusinessManagersId } from "@services/staffPortal/getBusinessManagersId";
import { useEffect, useState } from "react";

export interface IRolesByBusinessMapped {
  businessUnits: Record<string, BusinessUnitField>;
}

const useRolesByBusinessUnit = (
  entriesAdditionalBusinessEntity: IFormEntry[]
) => {
  const [formData, setFormData] = useState<IRolesByBusinessMapped>({
    businessUnits: {},
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const activeEntries = entriesAdditionalBusinessEntity.filter(
      (entry) => entry.isActive
    );

    if (activeEntries.length === 0) {
      setFormData({ businessUnits: {} });
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

        const mapped: Record<string, BusinessUnitField> = {};

        results.forEach(({ code, data }) => {
          mapped[code] = {
            value: "",
            options: data.flatMap((item: IBusinessUnitsPortalStaff) =>
              item.positionStaffByRoles.map((role) => ({
                id: role.positionId,
                label: role.roleName,
                value: role.positionId,
              }))
            ),
          };
        });

        setFormData({ businessUnits: mapped });
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
      businessUnits: {
        ...prev.businessUnits,
        [name]: {
          ...prev.businessUnits[name],
          value,
        },
      },
    }));
  };
  return {
    rolesByBusinessUnit: formData.businessUnits,
    loading,
    error,
    selectRolesByBusinessUnit,
  };
};

export { useRolesByBusinessUnit };
