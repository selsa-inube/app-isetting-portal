interface IAplication {
  appId: string;
  applicationName: string;
}

interface IUseCasesByStaffRoles {
  roleId: string;
  useCaseId: string;
}

interface IRoleForStaff {
  roleId: string;
  roleName: string;
  applicationName?: string;
  isActive?: boolean;
  publicCode?: string;
  descriptionUse?: string;
  application?: IAplication;
  useCasesByStaffRoles?: IUseCasesByStaffRoles[];
  id?: string | number;
}
export type { IRoleForStaff };
