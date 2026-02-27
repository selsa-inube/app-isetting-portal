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
          const positionStep = formValues.positionByBusinessUnitStep?.[0];
          map[code] = {
            value:
              (positionStep?.[code as keyof typeof positionStep]
                ?.value as string) || "",
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
    if (!activeEntries?.length) {
      setRolesByBusinessUnit([]);
      return;
    }

    const businessUnitKeys = formValues.businessUnitsStep.map(
      (businessUnit) => businessUnit.value,
    );

    const selectedPositionids = formValues.positionByBusinessUnitStep.flatMap(
      (step) => businessUnitKeys.map((key) => step[key]?.value).filter(Boolean),
    );

    if (!selectedPositionids.length) {
      setRolesByBusinessUnit([]);
      return;
    }

    const fetchRoles = async () => {
      try {
        setLoading(true);
        setError(null);

        const ids = selectedPositionids.join(",");

        const results = await Promise.all(
          activeEntries.map(async (entry) => ({
            code: entry.value,
            data: await getBusinessManagersId(entry.value, token, ids),
          })),
        );
        const roles: IFormEntry[] = [];

        const existingFormRoles = formValues.roleByBusinessUnitStep ?? [];
        results.forEach(({ code, data }) => {
          data.forEach((item) => {
            item.positionStaffByRoles.forEach((role) => {
              const existing = existingFormRoles.find(
                (r) => r.value === role.roleName && r.businessUnitCode === code,
              );

              roles.push({
                id: existing?.id ?? role.roleName,
                value: role.roleName,
                isActive: existing?.isActive ?? true,
                roleName: role.roleName,
                businessUnitCode: code,
                positionId: item.positionId,
                positionName: item.positionName,
              });
            });
          });
        });

        existingFormRoles.forEach((formRole) => {
          const alreadyExists = roles.some(
            (r) =>
              r.value === formRole.value &&
              r.businessUnitCode === formRole.businessUnitCode,
          );
          if (!alreadyExists) {
            roles.push({
              id: formRole.id,
              value: formRole.value,
              isActive: formRole.isActive ?? true,
              rolesStaff: formRole.value,
              roleName: formRole.value,
              businessUnitCode: formRole.businessUnitCode,
              positionName: formRole.positionName,
            });
          }
        });

        setRolesByBusinessUnit(roles);
        setFormValues((prev) => ({
          ...prev,
          roleByBusinessUnitStep: roles,
        }));
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
    positionsByBusinessUnit,
  ]);

  const selectPositionsByBusinessUnit = (name: string, value: string) => {
    setPositionsByBusinessUnit((prev) => {
      const updated = {
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      };

      setFormValues((prevForm) => ({
        ...prevForm,
        positionByBusinessUnitStep: [updated],
      }));

      return updated;
    });
  };

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
