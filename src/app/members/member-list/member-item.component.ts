import { Component, Input} from '@angular/core';

import { Member } from '../member'

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent {
  @Input() member: Member;
  @Input() memberID: number;

}
