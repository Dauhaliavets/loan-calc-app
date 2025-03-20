const formatToString = (value: number | string) => {
  return value
    .toString()
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default formatToString;
