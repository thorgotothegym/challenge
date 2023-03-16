import React from "react";
import "./index.css";

const Weather = (props: any) => {
  const [info, setInfo] = React.useState({
    city: null,
    temp: null,
    icon: null,
  });

  console.log("info" + JSON.stringify(info));

  const isPending = React.useRef(false);

  React.useLayoutEffect(() => {
    if (props.city !== null || isPending.current === false) {
      isPending.current = true;

      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${props.city}&appid=4c4f0b1876954338598a7be96c66527b`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=4c4f0b1876954338598a7be96c66527b`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              setInfo({
                city: data.name,
                temp: data.main.temp,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` as any,
              });

              isPending.current = false;
            });
        });
    }
  }, [props.city]);

  return (
    <>
      <h1>{info.city}</h1>

      <p>{info.temp && ~~info.temp} Celcius</p>

      <img src={info.icon as unknown as string} alt="Icon" />
    </>
  );
};

export { Weather };
