var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments';
var StatService = (function () {
    function StatService(_http) {
        this._http = _http;
    }
    StatService.prototype.createStat = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/stats';
        return this._http.post(_path, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    StatService.prototype.getPlayer = function (playerID) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/players?playerid=' + playerID;
        return this._http.get(_path, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    StatService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    StatService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return StatService;
}());
StatService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], StatService);
export { StatService };
//# sourceMappingURL=../../../../src/app/services/stat.service.js.map