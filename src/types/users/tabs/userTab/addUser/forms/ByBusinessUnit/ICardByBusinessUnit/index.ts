import { IOption } from "@inubekit/inubekit";

interface IRolesCardByBusinessUnit {
  id: string;
  businessUnit: string;
  options: IOption[];
  onSelectChange: (name: string, value: string) => void;
  value: string;
}
export type { IRolesCardByBusinessUnit };
