const dateFormator = (value) => {
  const date = new Date(value);

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(",", "");
  const parts = formattedDate.split(" ");
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];
  return `${day} ${month} ${year}`;
};

export default dateFormator;

const dateFormatorWithTime = (value) => {
    const date = new Date(value);
  
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
  
    const formattedDate = date.toLocaleString("en-GB", options);
    return formattedDate;
  };
  
  export { dateFormatorWithTime };
