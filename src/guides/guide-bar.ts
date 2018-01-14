import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { bindable } from 'aurelia-framework';

@inject(Router)
export class GuideBar {
  @bindable atRoot;
  @bindable title;
  @bindable items;
  router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  itemClicked(params: any): void {
    const href = params.target.href as string;
    const target = href.substr(href.indexOf('content/')).replace('content/', '');
  }
}
