const cancelLabels = (userAccount: string) => {
  return {
    removalJustification: `La cancelación de la solicitud  es requerida por ${userAccount}`,
  };
};

export { cancelLabels };
