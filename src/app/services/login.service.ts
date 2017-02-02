
import { Injectable }                               from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Router }                                   from '@angular/router';
import { Observable, Subject }                      from 'rxjs/Rx';
import { environment }                              from '../../environments';

export interface iCartItem {
  schoolName:string;
  passcode:string;
}

@Injectable()

export class LoginService {
  private schoolName:any  = null;
  private passcode:any    = null;
  subs:any = [];

  constructor(private _http:Http){

  }

  // create user
  createUser(data): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _path:string = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/users';

    return this._http.post(_path, data, options)
             .map(this.extractData)
             .catch(this.handleError);
  }

  getUsers(): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _path:string = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/users';
    return this._http.get(_path, options)
             .map(this.extractData)
             .catch(this.handleError);
  }

  login(data): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _path:string = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/users/login';
    return this._http.post(_path, data, options)
             .map(this.extractData)
             .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(){
   if (!localStorage.getItem('token')){
     return false;
   }
   return true;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
