import { useEffect, useState } from "react";

import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";
import { getBusinessManagersId } from "@services/staffPortal/getBusinessManagersId";
import { PositionsByBusinessUnitMap } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/IPositionByBusinessUnit";
import { IUseOptionsBusinessEntity } from "@ptypes/hooks/IUseOptionsBusinessEntity";

const useRolesByBusinessUnit = (props: IUseOptionsBusinessEntity) => {
  const { setFormValues, formValues, activeEntries, token } = props;
  const [positionsByBusinessUnit, setPositionsByBusinessUnit] =
    useState<PositionsByBusinessUnitMap>({});

  const [rolesByBusinessUnit, setRolesByBusinessUnit] = useState<IFormEntry[]>(
    [],
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    if (!activeEntries?.length) {
      setPositionsByBusinessUnit({});
      return;
    }

    const fetchPositions = async () => {
      try {
        setLoading(true);
        setError(null);

        const results = await Promise.all(
          activeEntries.map(async (entry) => ({
            code: entry.value,
            data: await getBusinessManagersId(entry.value, token),
          })),
        );

        const map: PositionsByBusinessUnitMap = {};

        results.forEach(({ code, data }) => {
          map[code] = {
            value: "",
            options: data.map((item: IBusinessUnitsPortalStaff) => ({
              id: item.positionId,
              label: item.positionName,
              value: item.positionId,
            })),
          };
        });

        setPositionsByBusinessUnit(map);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, [activeEntries, token]);

  useEffect(() => {
    if (
      !activeEntries?.length ||
      !formValues.positionByBusinessUnitStep?.length
    ) {
      setRolesByBusinessUnit([]);
      return;
    }

    const businessUnitKeys = formValues.businessUnitsStep.map((bu) => bu.value);

    const selectedPositionIds = formValues.positionByBusinessUnitStep.flatMap(
      (step) => businessUnitKeys.map((key) => step[key]?.value).filter(Boolean),
    );

    if (!selectedPositionIds.length) {
      setRolesByBusinessUnit([]);
      return;
    }

    const fetchRoles = async () => {
      try {
        setLoading(true);
        setError(null);

        const ids = selectedPositionIds.join(",");

        const results = await Promise.all(
          activeEntries.map(async (entry) => ({
            code: entry.value,
            data: await getBusinessManagersId(entry.value, token, ids),
          })),
        );

        const roles: IFormEntry[] = [];

        results.forEach(({ code, data }) => {
          data.forEach((item) => {
            item.positionStaffByRoles.forEach((role) => {
              roles.push({
                id: role.positionId,
                value: role.positionId,
                isActive: true,
                rolesStaff: role.roleName,
                businessUnitCode: code,
                positionId: item.positionId,
                positionName: item.positionName,
              });
            });
          });
        });

        setRolesByBusinessUnit(roles);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, [
    activeEntries,
    formValues.businessUnitsStep,
    formValues.positionByBusinessUnitStep,
    token,
  ]);

  const selectPositionsByBusinessUnit = (name: string, value: string) => {
    setPositionsByBusinessUnit((prev) => {
      if (!prev[name]) return prev;

      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      };
    });
  };

  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      positionByBusinessUnitStep: [positionsByBusinessUnit],
    }));
  }, [positionsByBusinessUnit, setFormValues]);

  useEffect(() => {
    const activeRoles = rolesByBusinessUnit.filter((r) => r.isActive);

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
