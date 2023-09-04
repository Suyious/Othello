import { Component, Input } from '@angular/core';

type Position = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

@Component({
  selector: 'modal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() title: string = "options";
  @Input() position: Position = { top: "0", left: "0" }
  @Input() absolute: boolean = false;
}
