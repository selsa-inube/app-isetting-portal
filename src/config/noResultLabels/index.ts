const noResultLabels = (search?: string) => {
  return {
    noData: `No se encontraron resultados para "${search}".`,
    tryAgainLater:
      " Por favor, intenta modificando los parámetros de búsqueda.",
  };
};

export { noResultLabels };
