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
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments';
var URL = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/files';
var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
        this.uploader = new FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUploaderComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploaderComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    FileUploaderComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
    };
    FileUploaderComponent.prototype.upload = function () {
    };
    return FileUploaderComponent;
}());
FileUploaderComponent = __decorate([
    Component({
        selector: 'app-file-uploader',
        templateUrl: './file-uploader.component.html',
        styleUrls: ['./file-uploader.component.css']
    }),
    __metadata("design:paramtypes", [])
], FileUploaderComponent);
export { FileUploaderComponent };
//# sourceMappingURL=../../../../../src/app/component/file-uploader/file-uploader.component.js.map