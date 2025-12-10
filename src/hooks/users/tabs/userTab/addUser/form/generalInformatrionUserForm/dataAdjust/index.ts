import { months } from "@config/users/addUsers/form/generalStep/months";

const formatDate = (date: string) => {
  const [year, month, day] = date.split("-");

  const formattedDay = day.padStart(2, "0");
  const monthAbbreviation = months[Number(month) - 1];

  return `${formattedDay}/${monthAbbreviation}/${year}`;
};

export { formatDate };
