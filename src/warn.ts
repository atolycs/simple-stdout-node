
import { LoggingTypes } from "./types";

export function warn(message: LoggingTypes): void {
  console.warn(`[ WARN ]: ${message}`);
}
