import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // window.setTimeout(()=>{
      $('.collapsible').collapsible();
    // },0);
  }

}
