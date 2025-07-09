const appearenceBorderStack =[
    'light',
    'gray',
    'dark',
]as const ;

type IAppearenceBorderStack = (typeof appearenceBorderStack)[number];

export type { IAppearenceBorderStack };
export { appearenceBorderStack };


