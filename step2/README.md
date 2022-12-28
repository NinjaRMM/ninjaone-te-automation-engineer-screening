# Weather API Testing
Given the following API definition, create a file named `tests.txt`, and using pseudo code, describe how you would test the API.

## /v1/weather

---
`HTTP GET`
Get current weather data by city, ZIP code, or geolocation coordinates (latitude/longitude).

**Parameters**  
`lat` (required) - latitude of the desired location.

`lon` (required) - longitude of the desired location.

— or —

`zip` (required) - 5-digit Zip code (United States only)

— or —

`city` (required) - city name.

`state` (optional) - US state (for United States cities only).

`country` (optional) - country name.

**Sample Request URL**

`https://ninja-weather.com/v1/weather?city="Dallas"`

**Sample Response**

```json
{
  "cloud_pct": "25",
  "temp": 5,
  "feels_like": -2,
  "humidity": "81",
  "min_temp": -8,
  "max_temp": 10,
  "wind_speed": "12.86",
  "wind_degrees": "330",
  "sunrise": "2022-12-27T12:28:32.047Z",
  "sunset": "2022-12-27T23:27:28.021Z"
}
```

**Sample Request URL**

`https://ninja-weather.com/v1/weather?city="Sao Paulo"&country="Brazil"`

**Sample Response**

```json
{
  "cloud_pct": "45",
  "temp": 23,
  "feels_like": 23,
  "humidity": "86",
  "min_temp": 22,
  "max_temp": 23,
  "wind_speed": "3.13",
  "wind_degrees": "166",
  "sunrise": "2022-12-27T09:28:32.047Z",
  "sunset": "2022-12-27T20:27:28.021Z"
}
```

