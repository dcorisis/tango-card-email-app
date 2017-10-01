import { RequestOptions,  } from '@angular/http';
import { EmailModel } from '../models/email-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class HomeService {

	constructor(private _http: HttpClient) { }

	public sendMail(newEmail:EmailModel):Observable<EmailModel> {
    	let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
		return this._http.post<EmailModel>('/SendMail',JSON.stringify(newEmail),{ headers: headers } );
	}
}
