import { getArgs } from "./helpers/getArgs";
import { printHelp, printSuccess, printError } from "./services/log.service";
import { saveKeyValue } from "./services/storage.service";
import { TOKEN_DICTIONARY } from "./constants/TOKEN_DICTIONARY";
import { getWeather } from "./services/api.service";

const saveToken = async (token: string | boolean) => {
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

const startCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getWeather("moscow");
};

startCli();
