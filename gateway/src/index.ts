import { ApolloServer } from 'apollo-server'
import getSchema from './schema'

const start = async () => {
  new ApolloServer({
    schema: await getSchema() as any,
  })
  .listen(5000)
  .then(({ url }) => `Gateway: ${url}`)
}
start()