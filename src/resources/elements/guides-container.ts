import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

const DefaultGuidesUrl = 'https://aurelia-tools.gitbooks.io/aurelia-cli-visions/content/';

@inject(Router)
export class GuidesContainer {
  router: Router;
  guidesUrl: string;
  constructor(router: Router) {
    this.router = router;
    this.guidesUrl = DefaultGuidesUrl;
  }
}
