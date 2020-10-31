import getRemoteSchema from './util/getRemoteSchema'
import { stitchSchemas } from '@graphql-tools/stitch'
import { delegateToSchema } from '@graphql-tools/delegate'

export default async () => {
  const weatherSchema = await getRemoteSchema({ url: 'http://localhost:4000/' })
  const citySchema = await getRemoteSchema({ url: 'http://localhost:4001/' })

  return stitchSchemas({
    subschemas: [
      weatherSchema,
      citySchema,
    ],
    typeDefs: `
      extend type City {
        forecasts(time: String): [Weather!]
      }
    `,
    resolvers: {
      City: {
        forecasts: {
          selectionSet: `{ name }`,
          resolve: (city, args, context, info) => {
            return delegateToSchema({
              schema: weatherSchema,
              operation: 'query',
              fieldName: 'forecasts',
              args: { name: city.name, ...args },
              context,
              info
            })
          }
        }
      }
    }
  })
}