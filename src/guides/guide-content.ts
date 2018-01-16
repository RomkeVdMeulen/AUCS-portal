import { Router } from 'aurelia-router';
import { bindable, inject } from 'aurelia-framework';

export class GuideContent {
  @bindable title: string;
  @bindable overview: string;
  @bindable categories: any;

  constructor() {
  }
}
