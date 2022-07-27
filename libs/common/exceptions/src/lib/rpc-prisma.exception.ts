import { Catch, RpcExceptionFilter } from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { RpcException } from "@nestjs/microservices";
import { Prisma } from "@prisma/client";

@Catch()
export class RpcPrismaExceptionFilter
  implements RpcExceptionFilter<RpcException>
{
  catch(exception): Observable<any> {
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      if (exception.code === "P2002") {
        exception = new RpcException("Resource already exist");
      }
      if (exception.code === "P2025") {
        exception = new RpcException("Resource not exist");
      }
    }
    return throwError(() => exception.message);
  }
}
