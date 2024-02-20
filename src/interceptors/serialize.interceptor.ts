import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class SerializeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // jalankan sebelum data dikirim ke controller
    console.log('Berjalan sebelum handler/controller');

    return next.handle().pipe(
      // jalankan setelah controller
      map((data: any) => {
        console.log('Dijalankan setelah controller');
        return data;
      }),
    );
  }
}
