import {Component, Input} from '@angular/core';

@Component({
  selector: 'home-page-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

	@Input()
	datasource;

	private selectedImage;

	setSelectedImage (image) {
		this.selectedImage = image;
	}
}
