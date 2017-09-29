import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class HomeService {

	constructor(private _http: HttpClient) { }

	public sendMail(code:string):Observable<string> {
		return this._http.post<string>('/SendMail',{});//, {organizationCode:code});
	}
}
