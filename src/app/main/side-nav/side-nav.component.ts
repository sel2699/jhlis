import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

sideNavItems = [
  { name: 'Dashboard', id: 1 },
  { name: 'Item Borrow / Return', id: 2 },
  { name: 'Lab Item Management',  id: 3 },
  { name: 'Reports',  id: 4},
  { name: 'Requests',  id: 5 },
  { name: 'Account Management',  id: 6 }
];

  constructor() { }

  ngOnInit() {
  }

}
