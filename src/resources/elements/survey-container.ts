import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class SurveyContainer {
  router: Router;
  constructor(router: Router) {
    this.router = router;
  }
}
