import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Guides {
  router: Router;
  client: HttpClient;
  routes: any;
  chapters: any;
  constructor(client: HttpClient) {
    this.client = client;
  }

  canActivate() {

  }

  configureRouter(config, router) {
    this.router = router;
    this.routes = [
      { route: '', name: 'Tutorial', moduleId: 'guides/guide-content', nav: true, title: 'Guides', settings: { children: [], path: 'README.json' } },
      { route: 'content/:id', moduleId: 'guides/guide-content' }
    ];
    config.map(this.routes);
    return this.client.fetch('https://api.gitbook.com/book/aurelia-tools/aurelia-cli-visions/contents')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.chapters = data.progress.chapters;
        return true;
      });
  }
}
