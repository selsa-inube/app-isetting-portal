const border =[
    'n0',
    'n40',
]as const ;

type IBorder = (typeof border)[number];

export type { IBorder };
export { border };


