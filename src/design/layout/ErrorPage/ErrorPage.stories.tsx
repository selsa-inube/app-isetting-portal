import { Meta } from "@storybook/react";

import errorImage from "@assets/images/errorImage.png";

import { ErrorPage, IErrorPage } from "./index";

const meta: Meta<typeof ErrorPage> = {
  title: "layout/Error",
  component: ErrorPage,
};

const Default = (args: IErrorPage) => <ErrorPage {...args} />;

Default.args = {
  logo: errorImage,
  logoAlt: "Sistemas Enlinea",
  heading: "¿Qué salió mal?",
  description:
    "El servicio no se encuentra disponible en el momento. Por favor intenta de nuevo más tarde.",
  imageAlt: "Ha surgido un error. Revisa la descripción",
};
export { Default };
export default meta;
