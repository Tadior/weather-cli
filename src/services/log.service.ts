import chalk from "chalk";
import dedent from "ts-dedent";
import { weatherResponse } from "../types/type";
import { getIcon } from "../helpers/getIcon";

const printError = (errorMessage: string) => {
  console.log(chalk.bgRed("Error:"), errorMessage);
};
const printSuccess = (message: string) => {
  console.log(chalk.bgGreen("Success:"), message);
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
const printForecast = (weather: weatherResponse) => {
  console.log(
    dedent(`
  ${chalk.bgGreen("Success")} Погода в городе ${weather.name}
  ${getIcon(weather.weather[0].icon)}  ${weather.weather[0].description}
  Температура: ${weather.main.temp}°C (ощющается как ${
      weather.main.feels_like
    }°C)
  Влажность: ${weather.main.humidity}
  Скорость ветра: ${weather.wind.speed} м/c
  `)
  );
};

export { printError, printSuccess, printHelp, printForecast };
