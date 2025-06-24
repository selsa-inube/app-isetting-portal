import { IAssistedStep } from "@inubekit/inubekit";

const assistedSteps: IAssistedStep[] = [
  {
    id: 1,
    number: 1,
    name: "Información general",
    description: "Por favor completa la información general.",
  },
  {
    id: 2,
    number: 2,
    name: "Verificación",
    description:
      "Verifica las opciones activadas, si es necesario cámbialas o por el contrario si todo está correcto dale enviar.",
  },
];

export { assistedSteps };
