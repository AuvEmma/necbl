import { Injectable }                               from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Router }                                   from '@angular/router';
import { Observable, Subject }                      from 'rxjs/Rx';
import { environment }                              from '../../environments';

@Injectable()
export class ApplicationService {
  _regions$   : Subject<any>;

  constructor(private _http:Http) {
    this._regions$    = <Subject<boolean>>new Subject();
  }

  createRegion(data):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _path:string = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/regions';
    return this._http.post(_path, data, options)
             .map(this.extractData)
             .catch(this.handleError);
  }

  getRegions(): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _path:string = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/regions';
    return this._http.get(_path, options)
             .map(this.extractData)
             .catch(this.handleError);
  }

  deleteRegion(data):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _path:string = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/regions/' + data._id;
    return this._http.delete(_path, options)
             .map(this.extractData)
             .catch(this.handleError);
  }

  createSeason(data):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _path:string = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/seasons';
    return this._http.post(_path, data, options)
             .map(this.extractData)
             .catch(this.handleError);
  }

  getSeasons(): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _path:string = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/seasons';
    return this._http.get(_path, options)
             .map(this.extractData)
             .catch(this.handleError);
  }

  get regions(){
    return this._regions$.asObservable();
  }

  setRegions$(regions:any = []) {
    this._regions$.next(regions);
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
