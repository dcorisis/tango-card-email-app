import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class HttpClientIntercepter implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newOptions = { url: environment.apiServerEndpoint + req.url };
        req = req.clone(newOptions);
        return next.handle(req).catch(error => {
                        let errMsg:string = error.error.message;
                        if(typeof errMsg === 'string' && errMsg.length > 0) {
                            this.router.navigate(['/ErrorMessage',errMsg]);
                        }
                        else{
                            console.log("Unknown error message", errMsg);
                            return Observable.throw(errMsg);
                        }
                    });
    }

}
