import { TOKEN_DICTIONARY } from "../constants/TOKEN_DICTIONARY";
import { getWeather } from "../services/api.service";
import { printError, printForecast } from "../services/log.service";
import { getKeyValue } from "../services/storage.service";
import { customError } from "../types/type";

export const getForecast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const weather = await getWeather(city);
    printForecast(weather);
  } catch (e) {
    if (e instanceof Error) {
      const err = e as customError;
      if (err?.response?.status === 404) {
        printError("Неверно указан город");
      } else if (err?.response?.status === 401) {
        printError("Неверно указан токен");
      } else {
        printError(e.message);
      }
    }
  }
};
