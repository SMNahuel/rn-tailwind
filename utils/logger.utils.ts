/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

const currentLogLevel = "error";
const logLevels = {
  TRACE: "trace",
  DEBUG: "debug",
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
} as const;

/**
 * Logs the message based on the specified log level.
 *
 * @param {string} message - the message to be logged
 * @param {'trace' | 'debug' | 'info' | 'warn' | 'error'} level - the log level
 * @param {...any[]} optionalParams - optional parameters to be logged along with the message
 * @return {void}
 */
const log = (
  message: string,
  level: "trace" | "debug" | "info" | "warn" | "error",
  ...optionalParams: any[]
) => {
  const levels = Object.values(logLevels);
  const currentLevelIndex = levels.indexOf(currentLogLevel);
  const messageLevelIndex = levels.indexOf(level);

  if (messageLevelIndex >= currentLevelIndex) {
    switch (level) {
      case "trace":
        console.trace(message, ...optionalParams);
        break;
      case "debug":
        console.debug(message, ...optionalParams);
        break;
      case "info":
        console.info(message, ...optionalParams);
        break;
      case "warn":
        console.warn(message, ...optionalParams);
        break;
      case "error":
        // TODO: Send crashlytics errors when !isDevelopment
        console.error(message, ...optionalParams);
        break;
      default:
        console.log(message, ...optionalParams);
        break;
    }
  }
};

const logger = {
  trace: (message: string, ...optionalParams: any[]) =>
    log(message, logLevels.TRACE, ...optionalParams),
  debug: (message: string, ...optionalParams: any[]) =>
    log(message, logLevels.DEBUG, ...optionalParams),
  info: (message: string, ...optionalParams: any[]) =>
    log(message, logLevels.INFO, ...optionalParams),
  warn: (message: string, ...optionalParams: any[]) =>
    log(message, logLevels.WARN, ...optionalParams),
  error: (message: string, ...optionalParams: any[]) =>
    log(message, logLevels.ERROR, ...optionalParams),
};

export { logger };
