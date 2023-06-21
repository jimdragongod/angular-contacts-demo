import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../shared/contact.service';
import {Contact} from '../shared/contact';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
    contact_id = '';
    detail: Contact = Contact.DUMMY_INSTANCE;
    // contacts: any = {};
    private sub: Subscription | undefined = undefined;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _contactService: ContactService
    ) {
    }

    ngOnInit() {
        this.sub = this._activatedRoute.params.subscribe(params => {
            this.contact_id = params['id'];
            this.getById(this.contact_id);
        });
    }

    ngOnDestroy() {
        if (this.sub !== undefined) {
            this.sub.unsubscribe();
        }
    }

    editContact() {
        this._router.navigate(['/edit', this.contact_id]);
    }

    collectTheContact() {
        this._contactService.collectContact(this.detail);
    }

    getById(id: string) {
        this._contactService.getContactById(id).subscribe(data => {
            this.detail = data[0];
        });
    }
}
