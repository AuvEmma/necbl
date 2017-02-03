import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  seasonName    : string  = '';
  regionName    : string  = '';

  constructor(private _router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('season') && localStorage.getItem('region')){
      this.seasonName = localStorage.getItem('season');
      this.regionName = localStorage.getItem('region');
    }else{
      this._router.navigate(['/dashboard']);
    }
  }
  onSubmit(e){

  }
}
