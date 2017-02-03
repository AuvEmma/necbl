import { Component, OnInit }  from '@angular/core';
import { LoginService }       from '../../services'
import { ApplicationService } from '../../services'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAdmin       : boolean = false;
  subs          : any     = [];
  selectOptions : any     = [];
  seasons       : any     = [];
  constructor(private _loginService: LoginService, private _applicationService: ApplicationService) {
    let sub: any = this._loginService.isAdmin$.subscribe(isAdmin => this.isAdmin = isAdmin, error => {/*console.log('Error: ', error)*/});
    this.subs.push(sub);
  }

  ngOnInit() {
  }

}
