import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabs: string[] = []
  @Input() active: number = 0;
  @Output() tabEvent = new EventEmitter<number>();

  tabTo(index: number) {
    this.active = index;
    this.tabEvent.emit(this.active);
  }
}
