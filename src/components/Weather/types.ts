interface Coors {
  lon?: number;
  lat?: number;
}

interface Weather {
  description?: string;
  icon: string;
  id?: number;
  main?: string;
}

export interface WeatherProps {
  city: {
    name: string;
    id?: number;
    code?: number;
    timezone?: number;
    coord?: Coors;
    weather?: Weather;
  };
}
