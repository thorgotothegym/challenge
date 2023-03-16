import React from "react";

interface WeatherProps {
  city: {
    name: string;
    id?: number;
    code?: number;
    timezone?: number;
    coord?: {
      lon?: number;
      lat?: number;
    };
    weather?: {
      description?: string;
      icon: string;
      id?: number;
      main?: string;
    };
  };
}

export const Weather = (props: WeatherProps) => {
  console.log("HELLO PROPS", props);
  const [info, setInfo] = React.useState({
    city: null,
    temp: null,
    icon: null,
  });

  return (
    <div data-testid="weatherID">
      <h1>{props.city.name}</h1>
      <ul>
        <li>Long: {props?.city?.coord?.lon}</li>
        <li>Lat: {props?.city?.coord?.lat}</li>
      </ul>

      <p>{info.temp && ~~info.temp} Celcius</p>

      <img src={props.city.weather?.icon} alt="Icon" />
    </div>
  );
};
