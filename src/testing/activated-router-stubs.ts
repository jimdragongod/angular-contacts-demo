import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ActivatedRouteStubService {
  params: Observable<any> = of({});
}
