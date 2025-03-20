const formatToNumber = (value: string) => {
  return parseInt(value.replace(/\s+/g, ""), 10);
};

export default formatToNumber;
