import { MdAdd } from "react-icons/md";

const menuOptionsAssignments = (setShowAbsenceModal: React.Dispatch<React.SetStateAction<boolean>>) => {
  return [
    {
      description: "Agregar encargo",
      icon: <MdAdd />,
      path: "",
      disabled: false,
      onClick: ()=> setShowAbsenceModal(true),
    },
  ];
};

export { menuOptionsAssignments };
