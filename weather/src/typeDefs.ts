import { gql } from 'apollo-server'

export default gql`
  type Query {
    forecasts(city: String, time: String): [Weather!]
  }

  enum WeatherStatus {
    SUNNY
    CLOUDY
    RAINNY
  }
  type Weather {
    city: String!
    time: String!

    temperature: Float
    humidity: Float
    status: WeatherStatus
  }
`