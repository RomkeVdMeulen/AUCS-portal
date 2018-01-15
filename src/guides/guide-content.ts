import { Router } from 'aurelia-router';
import { bindable, inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(Router, HttpClient)
export class GuideContent {
  @bindable chapters;
  router: Router;
  client: HttpClient;
  content: any;
  constructor(router: Router, client: HttpClient) {
    this.router = router;
    this.client = client;
    console.log(router);
  }

  canActivate(params) {
    console.log('---->');
  }

  activate(params) {
    const fragment = params.path ? (params.path as string) : 'README';
    const path = `${fragment}.json`.replace(/_____/g, '/');
    return this.client.fetch(`https://api.gitbook.com/book/aurelia-tools/aurelia-cli-visions/contents/${path}`)
      .then(response => response.json())
      .then(content => {
        this.content = content.sections[0].content;
        return true;
      });
  }
}
