
import { Injectable }                               from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Router }                                   from '@angular/router';
import { Observable, Subject }                      from 'rxjs/Rx';
import { environment }                              from '../../environments';

@Injectable()

export class LoginService {
  private schoolName:any  = null;
  private passcode:any    = null;
  
  subs:any = [];
  _isLoggedIn$: Subject<any>;
  _isAdmin$   : Subject<any>;

  constructor(private _http:Http){
    let userToken = localStorage.getItem('token');
    let data      = {
      token: userToken
    };
    this._isLoggedIn$ = <Subject<boolean>>new Subject();
    this._isAdmin$ = <Subject<boolean>>new Subject();

    this.checkLogin(data).subscribe(e=>{
      this._isLoggedIn$.next(true);
    })
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

  checkLogin(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _path:string = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/users/check';
    return this._http.post(_path, data, options)
            .map(this.extractData)
            .catch(this.handleError);
  }

  get isLoggedIn$(){
    return this._isLoggedIn$.asObservable();
  }

  setIsLoggedIn$(isLoggedIn: boolean) {
    this._isLoggedIn$.next(isLoggedIn);
  }

  get isAdmin$(){
    return this._isAdmin$.asObservable();
  }

  setIsAdmin$(isAdmin: boolean) {
    this._isAdmin$.next(isAdmin);
  }

  private extractData(res: Response) {
    let body = res.json();
    if(body.name === 'New York'){
      this.setIsAdmin$(true);
    }
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
