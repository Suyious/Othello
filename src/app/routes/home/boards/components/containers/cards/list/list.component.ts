import { Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from 'src/app/types/list';

@Component({
  selector: 'list-item-card',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListCardComponent {
  @Input() item?: List;
  @Output() deleteItem = new EventEmitter<void>();
  menuOpen: boolean = false;

  deleteListItem(){
    this.deleteItem.emit();
  }
}
