import {
  CallHandler,
  NestInterceptor,
} from '@nestjs/common/interfaces/features/nest-interceptor.interface';
import {
  ExecutionContext,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { ApmService } from './apm.service';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ApmErrorInterceptor implements NestInterceptor {
  constructor(protected readonly apmService: ApmService) {}

  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        this.apmService.captureError(error);

        return throwError(() => new InternalServerErrorException(error.message));
      }),
    );
  }
}
