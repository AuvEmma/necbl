var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatService } from '../../services';
var AddstatComponent = (function () {
    function AddstatComponent(_route, _router, _statService) {
        this._route = _route;
        this._router = _router;
        this._statService = _statService;
        this.playerId = '';
        this.player = null;
    }
    AddstatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this._route.params.subscribe(function (params) {
            _this.playerId = params['playerid'];
        });
        this.getPlayer(this.playerId);
    };
    AddstatComponent.prototype.getPlayer = function (playerid) {
        var _this = this;
        this._statService.getPlayer(playerid).subscribe(function (data) { return _this.player = data[0]; }, function (error) { return console.error(error); });
    };
    return AddstatComponent;
}());
AddstatComponent = __decorate([
    Component({
        selector: 'app-addstat',
        templateUrl: './addstat.component.html',
        styleUrls: ['./addstat.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Router, StatService])
], AddstatComponent);
export { AddstatComponent };
//# sourceMappingURL=../../../../../src/app/component/addstat/addstat.component.js.map