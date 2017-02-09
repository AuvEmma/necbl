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
import { Router } from '@angular/router';
import { ApplicationService } from '../../services';
var AllapplicationsComponent = (function () {
    function AllapplicationsComponent(_applicationService, _router) {
        this._applicationService = _applicationService;
        this._router = _router;
        this.applications = [];
    }
    AllapplicationsComponent.prototype.ngOnInit = function () {
        this.getAllApplications();
    };
    AllapplicationsComponent.prototype.getAllApplications = function () {
        var _this = this;
        this._applicationService.getAllApplications()
            .subscribe(function (data) {
            if (data === 'No_Application_Found') {
                _this.applications = [];
            }
            else {
                _this.applications = data;
            }
        }, function (error) { return console.log('error', error); });
    };
    return AllapplicationsComponent;
}());
AllapplicationsComponent = __decorate([
    Component({
        selector: 'app-allapplications',
        templateUrl: './allapplications.component.html',
        styleUrls: ['./allapplications.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationService, Router])
], AllapplicationsComponent);
export { AllapplicationsComponent };
//# sourceMappingURL=../../../../../src/app/component/allapplications/allapplications.component.js.map