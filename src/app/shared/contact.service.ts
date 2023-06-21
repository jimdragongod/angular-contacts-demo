import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, Observable, of, throwError} from 'rxjs';
import {Contact} from './contact';


const CONTACT_URL = '/assets/contacts.json';

let _contacts: Array<Contact> | Contact;

@Injectable()
export class ContactService {
    constructor(private http: HttpClient) {
    }

    getContactsData(opts?: { id?: number, collection?: number }): Observable<Array<Contact>> {
        let source: Observable<Contact[]>;
        if (Array.isArray(_contacts)) {
            source = of(_contacts);
        } else {
            source = this.http.request('get', CONTACT_URL)
                .pipe(map(data => _contacts = <Array<Contact>>data), catchError(this.handleError));
        }
        return source.pipe(map(data => this.filter(data, opts)));
    }

    getContactById(idStr: string) {
        const id: number = parseInt(idStr, 10);
        return this.getContactsData({id: id});
    }

    getCollections() {
        return this.getContactsData({collection: 1});
    }

    addContact(obj: Contact) {
        if (!Array.isArray(_contacts)) {
            console.error('请刷新重试');
            return;
        }
        obj.id = _contacts.length + 1;
        _contacts.push(obj);
    }

    editContact(obj: Contact) {
        // tslint:disable-next-line:curly
        if (!obj) {
            return;
        }
        if (!Array.isArray(_contacts)) {
            console.error('请刷新重试');
            return;
        }
        let idx = -1;
        for (const one of _contacts) {
            idx++;
            if (one.id === obj.id) {
                _contacts[idx] = one;
            }
        }
    }

    collectContact(obj: Contact) {
        if (!Array.isArray(_contacts)) {
            console.error('请刷新重试');
            return;
        }
        for (const one of _contacts) {
            if (one.id === obj.id) {
                // tslint:disable-next-line:no-bitwise
                one.collection ^= 1;
                break;
            }
        }
    }

    filter(data: Array<Contact>, opts?: { id?: number, collection?: number }) {
        const filteredResultArr: Array<Contact> = [];

        // tslint:disable-next-line:curly
        if (!opts) {
            return data;
        }
        if (opts.id) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === opts.id) {
                    filteredResultArr.push(data[i]);
                }
            }
        }
        if (opts.collection) {

            for (let i = 0; i < data.length; i++) {
                if (data[i].collection === opts.collection) {
                    filteredResultArr.push(data[i]);
                }
            }
        }
        return filteredResultArr;
    }

    handleError(err: HttpErrorResponse) {
        let errMsg;
        if (err.error instanceof Error) {
            // 客户端错误或者网络异常，即连接还没传达到服务端
            errMsg = err.error.message;
        } else if (err.status) {
            // 服务端已经接收到请求，但返回非 200 的 HTTP 状态码
            errMsg = `${err.status} - ${err.statusText}，详细错误：${err.error}`;
        }
        console.error(errMsg); // 打印到控制台
        return throwError(errMsg);
    }
}
