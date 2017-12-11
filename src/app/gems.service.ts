import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GemsService {

  constructor(private http: Http) { }
	
  getGems():Promise<Response[]>{
	  const endpoint = 'http://159.203.60.107/gems';  		     	
		return this.http.get(endpoint).toPromise().then(response => response.json() as  Response[]);
  }

}
