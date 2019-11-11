import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput : ElementRef;
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()  bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({serverName: newServerName.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: newServerName.value, serverContent: this.serverContentInput.nativeElement.value});
  }
}
