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
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.images = [
            {
                "url": "../../../assets/image/gallery_1.gif"
            },
            {
                "url": "../../../assets/image/gallery_2.gif"
            },
            {
                "url": "../../../assets/image/gallery_3.gif"
            },
            {
                "url": "../../../assets/image/gallery_4.gif"
            },
            {
                "url": "../../../assets/image/gallery_5.gif"
            },
            {
                "url": "../../../assets/image/gallery_6.gif"
            },
            {
                "url": "../../../assets/image/gallery_7.gif"
            },
            {
                "url": "../../../assets/image/gallery_8.gif"
            },
            {
                "url": "../../../assets/image/gallery_9.gif"
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../../src/app/component/home/home.component.js.map