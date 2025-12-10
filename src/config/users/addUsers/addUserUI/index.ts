const addUserUIConfig = {
  AssistedConfig: {
    goBackText: "Anterior",
    goNextText: "Siguiente",
    submitText: "Enviar",
  },
  generalInformationStep: 1,
  misionForStaff: 2,
  contactData: 3,
  businessEntityStep: 4,
  positionByBusinessUnit: 5,
  roleByBusinessUnit: 6,
  verificationStep: 7,

  title: "Agregar funcionario",
  description: "Agrega un nuevo funcionario a tu organización",
  missionNameModal: {
    title: "Alerta",
    description:
      "No es posible registrarla de nuevo, selecciónala en la lista.",
    actionText: "Entendido",
    subtitle:
      "Encontramos una misión con el nombre que estás utilizando, se trata de: Nombre de misión existente",
  },
};

export { addUserUIConfig };
