interface IFormEntry {
  id: string;
  value: string;
  abbreviatedName?: string;
  applicationName?: string;
  isActive: boolean;
  rolesStaff?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type { IFormEntry };
