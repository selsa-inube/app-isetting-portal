interface IOptions {
  id: string;
  label: string;
  checked?: boolean;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IOptions };
