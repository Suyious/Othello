import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status } from 'src/app/types/list';

@Component({
  selector: 'list-column',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() status: Status = "todo";
  @Output() createOpenEvent = new EventEmitter<boolean>();
  createOpen: boolean = false;
}
