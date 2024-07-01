import { LoggingTypes } from './types'

export function info(log: LoggingTypes): void {
  console.info(`[ INFO ]: ${log} `)
}
