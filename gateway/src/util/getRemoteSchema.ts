import { loadSchema } from '@graphql-tools/load'
import { UrlLoader } from '@graphql-tools/url-loader'
import { wrapSchema } from '@graphql-tools/wrap'
import { print } from 'graphql'
import { fetch } from 'cross-fetch'

export default async({ url }: { url: string }) => {
  const typeDefs = await loadSchema(url, { loaders: [new UrlLoader()] })
  return wrapSchema({
    schema: typeDefs,
    executor: async ({ document, variables, context }) => {
      const query = print(document)
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables })
      }).then(res => res.json())
    }
  })
}