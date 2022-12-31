import { getArgs } from "./helpers/getArgs";
import { printHelp } from "./services/log.service";
import { saveToken } from "./helpers/saveToken";
import { saveCity } from "./helpers/saveCity";
import { getForecast } from "./helpers/getForecast";

const startCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForecast();
};

startCli();
