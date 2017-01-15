import { Component, OnInit } from '@angular/core';

// import { HomeImage } from './home-image.interface';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public images = IMAGES;

  constructor() { }

  ngOnInit() {}

}

// TODO
// var IMAGES: HomeImage[] = [
//   { "title": "We are covered", "url": "images/covered.jpg" },
//   { "title": "Generation Gap", "url": "images/generation.jpg" },
//   { "title": "Potter Me", "url": "images/potter.jpg" },
//   { "title": "Pre-School Kids", "url": "images/preschool.jpg" },
//   { "title": "Young Peter Cech", "url": "images/soccer.jpg" } 
// ];