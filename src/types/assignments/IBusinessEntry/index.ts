interface IBusinessEntry {
  publicCode: string;
  isActive: boolean;
  id?: string;
  roleNames?: string[];
  positionNames?: string[];
  value?: string
}

export type { IBusinessEntry };
