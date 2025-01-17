import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../shared/contact.service';

import {DetailComponent} from './detail.component';
import {ActivatedRouteStubService, RouterLinkStubDirective, RouterStubService} from '../../testing';
import {PhonePipe} from '../shared/phone.pipe';
import {Observable, of} from 'rxjs';
import {Contact} from '../shared/contact';

const TEST_DATA = {
    'id': 1,
    'name': '张三',
    'telNum': '18900001001',
    'address': '广东省深圳市',
    'email': '123@qq.com',
    'birthday': '1990/10/10',
    'collection': 1
};

const FakeContactService = {
    getContactById(id: string): Observable<Array<Contact>> {
        console.info(`id: ${id}`);
        return of([TEST_DATA]);
    }
};

describe('DetailComponent', () => {
    let component: DetailComponent;
    let fixture: ComponentFixture<DetailComponent>;
    // let spy: any;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                DetailComponent,
                PhonePipe,
                RouterLinkStubDirective
            ],
            providers: [
                {provide: Router, useClass: RouterStubService},
                {provide: ActivatedRoute, useClass: ActivatedRouteStubService},
                {provide: ContactService, useValue: FakeContactService}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.componentInstance;

        // // 从注入器里获取 ContactService 实例
        // const contactService = fixture.debugElement.injector.get(ContactService);

        // // 利用 spyOn 处理 getContactById() 函数
        // spy = spyOn(contactService, 'getContactById')
        //   .and.returnValue(Observable.of(TEST_DATA));

        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('test component data', () => {
        expect(component.detail.name).toEqual('张三');
    });

    it('test component template content', () => {
        const el: HTMLElement = fixture.debugElement.nativeElement;
        // 获取并检查 DOM 元素的内容
        const tmplValue = el.querySelector('.detail-info>li:first-child>p:nth-child(2)')?.textContent;
        expect(tmplValue).toBe('189-0000-1001');
    });

    // it('should get detail value by spies', () => {
    //   expect(component.detail.name).toEqual('张三');
    //   expect(spy.calls.any()).toEqual(true);
    // });
});
