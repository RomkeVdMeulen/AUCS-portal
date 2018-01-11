import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import text1 from './home/text1';
import text2 from './home/text2';
import text3 from './home/text3';

@inject(Router)
export class Home {
  router: Router;
  model: any;
  constructor(router: Router) {
    this.router = router;
    this.model = {
      text1: text1,
      text2: text2,
      text3: text3
    };
  }
}
