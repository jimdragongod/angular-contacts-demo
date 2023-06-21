import { Injectable } from '@angular/core';

// mock Router
// import { Router } from '@angular/router';
@Injectable()
export class RouterStubService {
  navigate(paths: Array<string|number>) {
    console.info(`navigate paths: ${paths}`);
  }
}
