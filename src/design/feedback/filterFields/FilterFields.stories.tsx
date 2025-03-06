import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { useState } from "react";
import { IFilterFields } from "./types";
import { FilterFields } from ".";

const story = {
  component: FilterFields,
  title: "feedback/FilterFields",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const data: { [key: string]: string | number }[] = [
  {
    id: "11",
    username: "David Leonardo Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",

    email: "dgarzon@sistemasenlinea.com.co",
    phone: "3123202874",
  },
  {
    id: "13",
    username: "David Leonardo Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",

    email: "dgarzon@sistemasenlinea.com.co",
    phone: "3123202874",
  },
  {
    id: "12",
    username: "Angie Pinilla",
    code: "APINILLA",
    userID: "789654",
    position: "Adviser",

    email: "apinilla@sistemasenlinea.com.co",
    phone: "1212145789",
  },
];

const Template: StoryFn<IFilterFields> = (args) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return <FilterFields {...args} onClick={handleToggleModal} />;
};

const Default = Template.bind({});
Default.args = {
  userData: data,
  name: "searchUser",
  id: "searchUser",
  title: "Filtrar",
  actionText: "Filtrar",
  options: [
    { id: "Aplicacion.", label: "Aplicación." },
    { id: "Sistemas.", label: "Sistemas." },
    { id: "Contabilidad.", label: "Contabilidad." },
  ],
};

export { Default };
export default story;
