import { Injectable, LoggerService as BaseLoggerService } from '@nestjs/common';

@Injectable()
export class LoggerService implements BaseLoggerService{
  debug(message: any, context?: string): any {
  }

  error(message: any, trace?: string, context?: string): any {
  }

  log(message: any, context?: string): any {
  }

  verbose(message: any, context?: string): any {
  }

  warn(message: any, context?: string): any {
  }

}
