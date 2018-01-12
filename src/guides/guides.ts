import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import * as data from "text!assets/site-map.json";

@inject(Router)
export class Guides {
  router: Router;
  books: any;
  constructor(router: Router) {
    this.router = router;
        this.books = JSON.parse(data as any);

  }
}
