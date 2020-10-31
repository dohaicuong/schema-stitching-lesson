import { Weather, WeatherStatus } from './generated-types'

export const forecasts: Weather[] = [
  { city: 'Brisbane', time: '6:00 am', temperature: 20, humidity: 30, status: WeatherStatus.Cloudy },
  { city: 'Brisbane', time: '7:00 am', temperature: 22, humidity: 32, status: WeatherStatus.Cloudy },
  { city: 'Brisbane', time: '8:00 am', temperature: 25, humidity: 33, status: WeatherStatus.Sunny },
  { city: 'Brisbane', time: '9:00 am', temperature: 30, humidity: 33, status: WeatherStatus.Sunny },

  { city: 'Melbourne', time: '6:00 am', temperature: 18, humidity: 28, status: WeatherStatus.Cloudy },
  { city: 'Melbourne', time: '7:00 am', temperature: 24, humidity: 30, status: WeatherStatus.Sunny },
  { city: 'Melbourne', time: '8:00 am', temperature: 28, humidity: 70, status: WeatherStatus.Rainny },
  { city: 'Melbourne', time: '9:00 am', temperature: 25, humidity: 90, status: WeatherStatus.Rainny },
]