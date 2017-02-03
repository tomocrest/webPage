import { Component, Input} from '@angular/core';

import { Photo } from '../photo'

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent {
  @Input() photo: Photo;
  @Input() photoID: number;

}
