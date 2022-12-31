import { getKeyValue } from "./storage.service";
import { TOKEN_DICTIONARY } from "../constants/TOKEN_DICTIONARY";
import axios from "axios";
import { weatherResponse } from "../types/type";

export const getWeather = async (city: string) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error(
      "Не задан ключ Api, задайте его через комманду -t [API_KEY]"
    );
  }
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  return data as weatherResponse;
};
