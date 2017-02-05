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
import { Observable, Subject } from 'rxjs/Rx';
import { environment } from '../../environments';
var ApplicationService = (function () {
    function ApplicationService(_http) {
        this._http = _http;
        this._regions$ = new Subject();
    }
    ApplicationService.prototype.createRegion = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/regions';
        return this._http.post(_path, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApplicationService.prototype.getRegions = function () {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/regions';
        return this._http.get(_path, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApplicationService.prototype.deleteRegion = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/regions/' + data._id;
        return this._http.delete(_path, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApplicationService.prototype.createSeason = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/seasons';
        return this._http.post(_path, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApplicationService.prototype.getSeasons = function () {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/seasons';
        return this._http.get(_path, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApplicationService.prototype.createPlayer = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/players';
        return this._http.post(_path, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApplicationService.prototype.getPlayers = function (schoolId) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/players?school=' + schoolId;
        return this._http.get(_path, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApplicationService.prototype.deletePlayer = function (playerId) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/players/' + playerId;
        return this._http.delete(_path, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    Object.defineProperty(ApplicationService.prototype, "regions", {
        get: function () {
            return this._regions$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ApplicationService.prototype.setRegions$ = function (regions) {
        if (regions === void 0) { regions = []; }
        this._regions$.next(regions);
    };
    ApplicationService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ApplicationService.prototype.handleError = function (error) {
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
    return ApplicationService;
}());
ApplicationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ApplicationService);
export { ApplicationService };
//# sourceMappingURL=../../../../src/app/services/application.service.js.map