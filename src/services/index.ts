import { ByCityReponse } from "../entities";

export const getByCity = async (city: string): Promise<ByCityReponse[]> => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=1253e373bb6f1e68db5a13c38e6b7c5a`
  );
  return response.json();
};

export const getByLatAndLon = async (
  lat: number,
  lon: number
): Promise<any> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1253e373bb6f1e68db5a13c38e6b7c5a`
  );
  return response.json();
};
