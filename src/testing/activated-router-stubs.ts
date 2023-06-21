import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Params} from '@angular/router';

// mock ActivatedRoute:
// import { ActivatedRoute } from '@angular/router';
@Injectable()
export class ActivatedRouteStubService {
  params: Observable<Params> = of({});
}
