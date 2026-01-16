import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { addAssignmentsLabels } from "@config/assignments/assisted/addAssignmentsLabels";
import { rolesByUnitLabels } from "@config/assignments/assisted/rolesByUnitLabels";
import { mediaQueryTabletMain } from "@config/environment";
import { IRolesByUnitEntry } from "@ptypes/assignments/assisted/IRolesByUnitEntry";
import { IUseRolesByUnitForm } from "@ptypes/hooks/IUseRolesByUnitForm";

const useRolesByUnitForm = (props: IUseRolesByUnitForm) => {
  const { entries, editDataOption, setRolesSelected } = props;
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(false);
  const isMobile = useMediaQuery(mediaQueryTabletMain);
  const [rolesByBusinessUnit, setRolesByBusinessUnit] =
    useState<IRolesByUnitEntry[]>(entries);

  const handleSelectCheckChange = (id: string) => {
    setRolesByBusinessUnit((prevState) =>
      prevState.map((entry) => {
        const RoleIndex = entry.roles?.findIndex((rol) => rol.id === id);

        if (RoleIndex !== undefined && RoleIndex >= 0 && entry.roles) {
          const newRoles = entry.roles.map((rol, index) =>
            index === RoleIndex ? { ...rol, isActive: !rol.isActive } : rol
          );

          const allActive = newRoles.every((role) => role.isActive);
          const allInactive = newRoles.every((role) => !role.isActive);

          let iconButton = entry.iconButton;
          let actionButton = entry.actionButton;

          if (allActive) {
            iconButton = rolesByUnitLabels.allInactiveIcon;
            actionButton = rolesByUnitLabels.allInactive;
          } else if (allInactive) {
            iconButton = rolesByUnitLabels.allActiveIcon;
            actionButton = rolesByUnitLabels.allActive;
          }

          return {
            ...entry,
            iconButton,
            actionButton,
            roles: newRoles,
          };
        }

        return entry;
      })
    );
  };

  const handleToggleAllEntries = (id: string) => {
    const targetEntry = rolesByBusinessUnit.find((entry) => entry.id === id);
    const currentRoles = targetEntry?.roles || [];

    const allRolesActive =
      currentRoles.length > 0 && currentRoles.every((role) => role.isActive);
    const newActiveState = !allRolesActive;

    const iconButton = newActiveState
      ? rolesByUnitLabels.allInactiveIcon
      : rolesByUnitLabels.allActiveIcon;
    const actionButton = newActiveState
      ? rolesByUnitLabels.allInactive
      : rolesByUnitLabels.allActive;

    const newRoles = rolesByBusinessUnit.map((entry) => {
      if (entry.id === id) {
        return {
          ...entry,
          iconButton: iconButton,
          actionButton: actionButton,
          roles:
            entry.roles?.map((role) => ({
              ...role,
              isActive: newActiveState,
            })) || [],
        };
      } else {
        return entry;
      }
    });

    setRolesByBusinessUnit(newRoles);
  };

  useEffect(() => {
    const allRoles = rolesByBusinessUnit.flatMap((unit) => unit.roles || []);

    const globalAllInactive =
      allRoles.length > 0 && allRoles.every((role) => !role.isActive);

    const allUnitsHaveActiveRole = rolesByBusinessUnit.every(
      (unit) => unit.roles && unit.roles.some((role) => role.isActive)
    );

    setRolesSelected(rolesByBusinessUnit);
    setIsDisabledButton(globalAllInactive || !allUnitsHaveActiveRole);
  }, [rolesByBusinessUnit]);

  const labelButtonPrevious = editDataOption
    ? addAssignmentsLabels.cancelButton
    : addAssignmentsLabels.previousButton;

  const labelButtonNext = editDataOption
    ? addAssignmentsLabels.sendButton
    : addAssignmentsLabels.nextButton;

  return {
    isMobile,
    isDisabledButton,
    labelButtonPrevious,
    labelButtonNext,
    rolesByBusinessUnit,
    handleToggleAllEntries,
    handleSelectCheckChange,
  };
};

export { useRolesByUnitForm };
