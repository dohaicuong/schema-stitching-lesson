import { cities } from './db'
import { City } from './generated-types'

export type Context = {
  cities: City[] 
}

export const createContext = () => {
  return { cities }
}
