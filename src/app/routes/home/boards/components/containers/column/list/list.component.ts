import { Component, Input } from '@angular/core';
import { Status } from 'src/app/types/list';

@Component({
  selector: 'list-column',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListColumnComponent {
  @Input() status: Status = "todo";
  createOpen: boolean = false;

  toggleCreateOpen() {
    this.createOpen = !this.createOpen;
  }
}
