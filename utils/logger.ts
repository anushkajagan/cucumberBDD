import winston from 'winston';

export function createLogger(moduleName: string) {
  const logFormat = winston.format.printf(
    (info: winston.Logform.TransformableInfo) => {
      return `[${info.timestamp}] [${info.level.toUpperCase()}] [${moduleName}]: ${info.message}`;
    }
  );

  return winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      logFormat
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/test.log' })
    ],
  });
}
