import { TOKEN_DICTIONARY } from "../constants/TOKEN_DICTIONARY";
import { printError, printSuccess } from "../services/log.service";
import { saveKeyValue } from "../services/storage.service";

export const saveToken = async (token: string | boolean) => {
  if (typeof token === "boolean") {
    printError("Не передан токен");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Токен сохранен");
  } catch (e) {
    if (e instanceof Error) {
      printError(e.message);
    } else {
      printError("Не удается сохранить токен");
    }
  }
};
