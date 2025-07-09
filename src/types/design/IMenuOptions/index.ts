interface IMenuOptions {
  description: string;
  icon: React.JSX.Element;
  disabled: boolean;
  path?: string;
  onClick?: () => void;
}

export type { IMenuOptions };
