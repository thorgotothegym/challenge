## Interview Challenge

This is a simple React app that allows the user to search for a location, and in turn get the relevant weather information.

The **required features are working** and have already been implemented, but the implementation can be improved in many different ways.

Given the existing solution, **refactor and tidy** the code to what you believe would be a better implementation while keeping **accessibility** in mind. The goal is to end up with a more flexible solution to be able to accommodate further required features.

## Getting Started

- Clone the repository
- Run **`yarn`** or **`npm i`** to install required dependencies
- Run **`yarn dev`** or **`npm run dev`** to start server
- Run **`yarn test`** or **`npm run test`** to run tests

## Bonus Ideas

- Implement a theme switcher i.e. **Dark / Light Mode**
- Make styling responsive
- Extended app with additional data being displayed, or more user control

## API Responses

### Location

    [ {	"name": "Copenhagen",

    	    "local_names": {
    		    "oc":"Copenaga",
    		    "gd":"Copenhagen",
    		    "eo":"Kopenhago" }

    	    "lat": 55.6867243,
    	    "lon": 12.5700724,
    	    "country": "DK",
    	    "state": "Capital Region of Denmark" } ]

### Weather

    { "coord": {
          "lon": 12.5701,
          "lat": 55.6867 },

      "weather": [ {
          "id": 804,
       	  "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n" } ],

       "base": "stations",

       "main": {
          "temp": 2.12,
          "feels_like": -3.69,
          "temp_min": 1.04,
          "temp_max": 2.73,
          "pressure": 1014,
          "humidity": 90 },

       "visibility": 9419,

       "wind": {
          "speed": 8.35,
          "deg": 272,
          "gust": 12.78 },

       "clouds": { "all": 89 },
       "dt": 1678921312,

       "sys": {
          "type": 2,
          "id": 2035645,
          "country": "DK",
          "sunrise": 1678944219,
          "sunset": 1678986806 },

       "timezone": 3600,
       "id": 6949461,
       "name": "Inner City",
       "cod": 200 }

### Comments about the Challenge

- The first thing I have done has been to review the entire project and open all the files and directories and see the content and I have structured it as agnostic as possible, I was thinking of doing DDD but it would have lost a lot of time

- I have separated the components, services and entities with an index.ts/tsx.

- The two calls to the APIs could have been done with a promise.all, but I think it's cleaner that way.

- In the interface component, with a little time it could be done better and this can be improved.

- I have seen that the styles are all included in the app.css and the best thing to do is to separate the general ones and those of the components, but I have prioritized the functionality over the styles.

- I was doing a loading for when we called the API, but I left it unimplemented since it was finished to show the data although I was missing the icon and the temperature, but I was over time.

- And right now I just realized that one of the two calls, I forgot to type it and the api-key should be in .env

- I had to comment on the test, I had started with a very simple test, but I left it and went to the functionality
