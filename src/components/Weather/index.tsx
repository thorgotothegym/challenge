import React from "react";
import { WeatherProps } from "./types";

export const Weather = (props: WeatherProps) => {
  console.log("HELLO PROPS", props);

  return (
    <div data-testid="weatherID">
      <h1>{props.city.name}</h1>
      <ul>
        <li>Long: {props?.city?.coord?.lon}</li>
        <li>Lat: {props?.city?.coord?.lat}</li>
      </ul>

      {/* <p>{props.temp && ~~info.temp} Celcius</p> */}

      <img src={props.city.weather?.icon} alt={`${props.city.name}`} />
    </div>
  );
};
