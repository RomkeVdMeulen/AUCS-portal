import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import * as data from "text!assets/home.json";

@inject(Router)
export class Home {
  router: Router;
  model: any;
  constructor(router: Router) {
    this.router = router;
    this.model = JSON.parse(data as any);
  }
}
