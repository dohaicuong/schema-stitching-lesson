import { Resolvers } from './generated-types'

const resolvers: Resolvers = {
  Query: {
    forecasts: (_root, { city, time }, ctx) => {
      const cityFiltered = city ? ctx.forecasts.filter(forecast => forecast.city === city) : ctx.forecasts
      const timeFiltered = time ? cityFiltered.filter(forecast => forecast.time === time) : cityFiltered

      return timeFiltered
    }
  }
}
export default resolvers