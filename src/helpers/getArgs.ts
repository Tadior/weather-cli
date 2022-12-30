export const getArgs = (args: string[]) => {
  const res: { [unit: string]: string | boolean } = {};
  const [executer, file, ...rest] = args;
  rest.forEach((value, index, array) => {
    if (value.charAt(0) === "-" && value.charAt(1) === "-") {
      const str = value.substring(2);
      if (array[index + 1] && array[index + 1].charAt(0) !== "-") {
        res[str] = array[index + 1];
      } else {
        res[value.substring(2)] = true;
      }
    }
  });
  return res;
};
