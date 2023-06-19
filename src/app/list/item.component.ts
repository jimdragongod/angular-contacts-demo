import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Contact} from '../shared/contact';

@Component({
  selector: 'app-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() contact: Contact = Contact.DUMMY_INSTANCE;
  @Output() routerNavigate = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  goDetail(num: number) {
    this.routerNavigate.emit(num);
  }
}
