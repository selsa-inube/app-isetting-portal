const useCase = ["add", "edit", "delete"] as const;

type IUseCase = (typeof useCase)[number];

export type { IUseCase };
export { useCase };
