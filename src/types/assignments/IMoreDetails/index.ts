interface IMoreDetails {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any };
  labelsDetails: { [key: string]: string };
  isMobile: boolean;
  portalId: string;
  onCloseModal: () => void;
  title: string;
  moreDetailsModal: { [key: string]: string };
  pageLength?: number;
  columnWidths: number[];
}

export type { IMoreDetails };
