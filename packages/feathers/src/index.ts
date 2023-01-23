import { setDebug } from '@feathersjs/commons'

import version from './version'
import { Feathers } from './application'
import { FeathersApplication } from './declarations'

export function feathers<T = any, S = any>() {
  return new Feathers<T, S>() as FeathersApplication<T, S>
}

feathers.setDebug = setDebug

export { version, Feathers }
export * from './hooks'
export * from './declarations'
export * from './service'

if (typeof module !== 'undefined') {
  module.exports = Object.assign(feathers, module.exports)
}
