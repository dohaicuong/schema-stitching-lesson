import { gql } from 'apollo-server'

export default gql`
  type City {
    name: String!
    country: String!
  }
  type Query {
    cities(country: String): [City!]
    city(name: String!): City
  }
`