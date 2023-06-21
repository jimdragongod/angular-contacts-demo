import {Component, OnInit} from '@angular/core';
import {ContactService} from '../shared/contact.service';
import {Contact} from '../shared/contact';

@Component({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
    collections: Array<Contact> = [];

    // contacts: any = {};

    constructor(private _contactService: ContactService) {
    }

    getCollectionContact() {
        this._contactService.getCollections().subscribe(data => {
            this.collections = data;
        });
    }

    ngOnInit() {
        this.getCollectionContact();
    }
}
