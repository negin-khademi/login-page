import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Interceptor', req);
    let copyReq = req.clone({
      headers: new HttpHeaders().set('Authorization', 'Bearer ufhvuhfdu'),
    });
    return next.handle(req).pipe(
      tap(
      (res)=>{

        return res
    },
        (err)=>{
return err
        }
        )
      )
  }
}
