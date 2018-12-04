import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Sidenav } from 'src/app/interfaces/sidenav.model';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();

  public sidenavData: Sidenav[] = [
    {route: '/events', icon: 'event', name: 'Events'},
    {route: '/signup', icon: 'person_add', name: 'Sign up'},
    {route: '/login', icon: 'input', name: 'Login'}
  ]

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

}
