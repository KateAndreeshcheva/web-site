import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, ContentChild, ElementRef, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() element: {type: string, name: string, content: string};
  @ContentChild('contentP', {static: true}) paragraph: ElementRef;

  constructor(){
    console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngOnInit(){
    console.log("text: " + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentInit(){
    console.log("text after init: " + this.paragraph.nativeElement.textContent);
  }
}
