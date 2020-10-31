import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import { createContext } from './context'
import resolvers from './resolvers'

new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context: createContext,
})
.listen(4001).then(({ url }) => console.log(url))