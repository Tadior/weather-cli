import { TOKEN_DICTIONARY } from "../constants/TOKEN_DICTIONARY";
import { getWeather } from "../services/api.service";
import { printError, printSuccess } from "../services/log.service";
import { saveKeyValue } from "../services/storage.service";
import { customError } from "../types/type";

export const saveCity = async (city: string | boolean) => {
  if (typeof city === "boolean") {
    printError("Не указан город");
    return;
  }
  try {
    const isCityExist = await getWeather(city);
    if (isCityExist) {
      await saveKeyValue(TOKEN_DICTIONARY.city, city);
      printSuccess("Город сохранен");
    }
  } catch (e) {
    const err = e as customError;
    if (err.response?.status === 404) {
      console.log("Такого города не существует !");
    } else {
      console.log("Ошибка сервера");
    }
  }
};
