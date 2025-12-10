import { IOption } from "@inubekit/inubekit";

interface IPositionCardByBusinessUnit {
  id: string;
  businessUnit: string;
  options: IOption[];
  onSelectChange: (name: string, value: string) => void;
  value: string;
}
export type { IPositionCardByBusinessUnit };
