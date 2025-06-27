interface IPortalStaffOption {
  optionStaffId: string;
  publicCode: string;
  abbreviatedName: string;
  descriptionUse: string;
  useCaseId: string;
}
interface IPortalStaff {
  optionStaffId: string;
  publicCode: string;
  abbreviatedName: string;
  descriptionUse: string;
  useCaseId: string;
  subOption: IPortalStaffOption[];
}

export type { IPortalStaff, IPortalStaffOption };
