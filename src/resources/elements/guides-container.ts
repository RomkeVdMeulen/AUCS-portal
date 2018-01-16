import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class GuidesContainer {
  router: Router;
  content: string;
  constructor(router: Router) {
    this.router = router;
  }
  activate(params, routeConfig, navigationInstruction) {
    this.content = params;
  }
}
