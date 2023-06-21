import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Contact} from '../shared/contact';

@Component({
  selector: 'app-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() contact: Contact = Contact.DUMMY_INSTANCE;
  @Output() routerNavigate = new EventEmitter<number>();

  constructor() {
    console.info("ListItemComponent constructor()");
  }

  ngOnInit() {
    console.info("ListItemComponent ngOnInit()");
  }

  goDetail(num: number) {
    this.routerNavigate.emit(num);
  }
}
