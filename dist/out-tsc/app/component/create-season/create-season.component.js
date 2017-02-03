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
var CreateSeasonComponent = (function () {
    function CreateSeasonComponent(_applicationService, _router) {
        this._applicationService = _applicationService;
        this._router = _router;
        this.seasonName = '';
        this.regionName = '';
        this.subs = [];
        this.regions = [];
        this.seasons = [];
        this.selectedRegions = [];
        this.selected = {};
    }
    CreateSeasonComponent.prototype.ngOnInit = function () {
        $('.modal').modal();
        $('button.selected').hide();
        this.getRegions();
    };
    CreateSeasonComponent.prototype.getRegions = function () {
        var _this = this;
        this._applicationService.getRegions()
            .subscribe(function (data) {
            if (Array.isArray(data)) {
                _this.regions = data;
            }
        }, function (error) { return console.log('error', error); });
    };
    CreateSeasonComponent.prototype.addRegion = function (e) {
        var _this = this;
        e.preventDefault();
        var data = {
            'regionName': this.regionName,
        };
        this._applicationService.createRegion(data)
            .subscribe(function (data) {
            _this.regionName = '';
            _this.getRegions();
        }, function (error) { return console.log('error', error); });
    };
    CreateSeasonComponent.prototype.deleteRegion = function (e, _id) {
        var _this = this;
        e.preventDefault();
        var data = {
            '_id': _id
        };
        this._applicationService.deleteRegion(data)
            .subscribe(function (data) {
            _this.getRegions();
        }, function (error) { return console.log('error', error); });
    };
    CreateSeasonComponent.prototype.selectRegion = function (e, _id) {
        if (_id) {
            for (var i = 0; i < this.regions.length; i++) {
                if (this.regions[i]._id === _id) {
                    this.selectedRegions.push(this.regions[i]);
                    this.regions[i]['selected'] = true;
                    $('#' + _id).hide();
                    $('button.selected.' + this.regions[i]._id).show();
                }
                ;
            }
            ;
        }
        ;
    };
    CreateSeasonComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        if (!Array.isArray(this.selectedRegions) || this.selectedRegions.length < 1) {
            alert('Please select region!');
        }
        else {
            var data = {
                'seasonName': this.seasonName,
                'regions': this.selectedRegions
            };
            console.log(data);
            this._applicationService.createSeason(data)
                .subscribe(function (data) {
                _this.seasonName = '';
                _this._router.navigate(['/selectseason']);
            }, function (error) { return console.log('error', error); });
        }
        ;
    };
    ;
    return CreateSeasonComponent;
}());
CreateSeasonComponent = __decorate([
    Component({
        selector: 'app-create-season',
        templateUrl: './create-season.component.html',
        styleUrls: ['./create-season.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationService, Router])
], CreateSeasonComponent);
export { CreateSeasonComponent };
//# sourceMappingURL=../../../../../src/app/component/create-season/create-season.component.js.map