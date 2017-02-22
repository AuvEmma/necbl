import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';

declare var Materialize:any;
declare var jQuery:any;
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

	public images;
	constructor() {
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
	ngOnInit() {
		// let options=[
		// 	{selector:'#map',callback: function(el) {
    //     	Materialize.fadeInImage(jQuery(el))
		// 		}
		// 	}
		// ]
		// Materialize.scrollFire(options);
		jQuery(".necbl, .team, .goal").hide().each(function(i){
			jQuery(this).delay(i*1000).fadeIn(1000)
		})
	}


}
