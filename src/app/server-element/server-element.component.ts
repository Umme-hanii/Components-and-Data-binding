import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // Binding to custom properties
  // @Input() element: {type: string, name: string, content: string};
  // add an alias to custom properties
  @Input('servElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
