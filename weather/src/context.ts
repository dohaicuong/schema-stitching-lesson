import { forecasts } from './db'
import { Weather } from './generated-types'

export type Context = {
  forecasts: Weather[]
}

export const createContext = () => {
  return { forecasts }
}