import { Component, Input } from '@angular/core';

@Component({
  selector: 'board-card',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
}
