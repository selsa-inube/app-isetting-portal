import { IOption } from "@inubekit/inubekit";

interface IFields {
  icon: React.ReactNode;
  label: string;
  name: string;
  options: IOption[];
  values: string;
}

export type { IFields };
