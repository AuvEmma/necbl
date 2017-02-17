import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader }      from 'ng2-file-upload';
import { environment }       from '../../../environments';

const URL = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/files';
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  sizeLimit:number= 300000;
  errorMessage:string='';
  @Output()avatar: EventEmitter<string> = new EventEmitter<string>();
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor() {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);
      this.avatar.emit(environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/images/' + responsePath.name)
    };
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  }

  onChange(e){
    
  }
}
