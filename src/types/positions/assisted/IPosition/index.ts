interface IPosition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  public_code?: string;
  abbreviated_name?: string;
  n_roles?: string[];
}

export type { IPosition };
