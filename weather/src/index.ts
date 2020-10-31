import { ApolloServer } from 'apollo-server'

import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { createContext } from './context'

new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context: createContext
})
.listen(4000)
.then(({ url }) => console.log(`Weather API: ${url}`))