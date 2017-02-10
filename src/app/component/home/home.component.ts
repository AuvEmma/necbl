import { Component, Input } from '@angular/core';

import { GalleryComponent } from './gallery/gallery.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

}
