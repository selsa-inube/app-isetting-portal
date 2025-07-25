interface IAccordion {
  title: string;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

export type {IAccordion}