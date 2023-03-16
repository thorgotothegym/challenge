import React, { useEffect, useState } from "react";
import { Weather } from "../components/Weather";
import { ByCityReponse } from "../entities";
import { getByCity, getByLatAndLon } from "../services";

import "./app.css";

export const App = () => {
  const [input, setInput] = useState<string>("");

  const [city, setCity] = useState<string>("Gortfadda");
  const [byCity, setByCity] = useState<ByCityReponse>({
    lat: 53.3201094,
    lon: -8.567809712252107,
    name: "Gortfadda",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();

  const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    getData(event.target.value);
  };

  const getData = async (city: string): Promise<void> => {
    try {
      const responseByCity = await getByCity(city);
      const body = await responseByCity;

      const responseByLatAndLon = await getByLatAndLon(
        body[0].lat,
        body[0].lon
      );
      const body2 = await responseByLatAndLon;
      setByCity({ ...byCity, ...body2 });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(city);
  }, []);

  return (
    <>
      <input
        role="search"
        type="text"
        onChange={(event) => {
          handleCity(event);
        }}
      />

      <button onClick={() => setCity(input)}>Show Weather</button>
      <Weather city={byCity} />
    </>
  );
};
