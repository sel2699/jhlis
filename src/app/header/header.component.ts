import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userType = 'Administrator'
  name =  'Aldrin Samson';
  toggled: boolean = false;


  isToggled() {
    if(!this.toggled){ 
      this.toggled = true; 
    } else { this.toggled = false;}
  }

  constructor() { }

  ngOnInit() {
  }

}
