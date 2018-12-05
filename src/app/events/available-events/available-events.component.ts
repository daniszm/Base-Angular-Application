import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-events',
  templateUrl: './available-events.component.html',
  styleUrls: ['./available-events.component.scss']
})
export class AvailableEventsComponent implements OnInit {
  public breakpoint; 
  
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 1;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

}
