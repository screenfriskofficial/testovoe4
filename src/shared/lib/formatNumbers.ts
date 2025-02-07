const formatNumbers = (num: number) => {
  return new Intl.NumberFormat("ru-RU").format(num);
};
export { formatNumbers };
