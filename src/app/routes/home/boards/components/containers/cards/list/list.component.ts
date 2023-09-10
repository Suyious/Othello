import { Component, Input } from '@angular/core';
import { List } from 'src/app/types/list';

@Component({
  selector: 'list-item-card',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListCardComponent {
  @Input() item?: List;
  menuOpen: boolean = false;
}
