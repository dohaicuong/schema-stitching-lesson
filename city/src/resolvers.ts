import { Resolvers } from './generated-types'

const resolvers: Resolvers = {
  Query: {
    cities: (_root, { country }, ctx) => {
      return country ? ctx.cities.filter(city => city.country === country) : ctx.cities
    }
  }
}
export default resolvers