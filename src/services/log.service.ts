import chalk from "chalk";
import dedent from "ts-dedent";

const printError = (error: Error) => {
  console.log(chalk.bgRed("Error: ", error));
};
const printSuccess = (message: string) => {
  console.log(chalk.bgRed("Success: ", message));
};
const printHelp = () => {
  console.log(
    dedent(`
    ${chalk.bgCyan("Help")}
    Без параметров - вывод погоды
    --s city - для установки города
    --h - вывод помощи
    --t apikey - для сохранения токена
    `)
  );
};

export { printError, printSuccess, printHelp };
