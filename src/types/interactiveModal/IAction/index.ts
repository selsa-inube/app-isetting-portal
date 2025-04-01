interface IAction {
  id: string;
  content:
    | string
    | ((data: {
        [key: string]: string | number | boolean | React.ReactNode;
      }) => React.ReactNode);
}

export type { IAction };
