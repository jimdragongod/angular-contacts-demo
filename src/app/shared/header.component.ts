import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title = "";
  @Input() isShowCreateButton =false;

  constructor() {
    console.info("HeaderComponent constructor()");
  }

  ngOnInit() {
    console.info("HeaderComponent ngOnInit()");
  }
}
