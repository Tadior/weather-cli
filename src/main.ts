import { getArgs } from "./helpers/getArgs";
import { printHelp } from "./services/log.service";

const startCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
};

startCli();
