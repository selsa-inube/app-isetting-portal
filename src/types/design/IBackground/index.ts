const background =[
    'n0',
    'n10',
]as const ;

type IBackground = (typeof background)[number];

export type { IBackground };
export { background };


