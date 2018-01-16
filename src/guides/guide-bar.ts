import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { bindable } from 'aurelia-framework';

@inject(Router)
export class GuideBar {
  @bindable guides;
}
