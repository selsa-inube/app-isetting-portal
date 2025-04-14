interface IOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  handleClick?: () => void;
}

export type { IOption };
