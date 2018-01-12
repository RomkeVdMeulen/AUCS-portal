import {Router} from 'aurelia-router';
import {bindable, inject} from 'aurelia-framework';
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
    const fragment = params.id;
    console.log(fragment);
    return this.client.fetch('https://api.gitbook.com/book/aurelia-tools/aurelia-cli-visions/contents')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.chapters = data.progress.chapters;
        //////////////////
        let chapter = this.chapters.find((value, index) => value.level == fragment);
        console.log(chapter);
        // if (route === undefined)
        //   route = this.router.routes[0];
        //   console.log(route);
        const path = chapter.path.replace('md', 'json');
        console.log(path);
        return this.client.fetch(`https://api.gitbook.com/book/aurelia-tools/aurelia-cli-visions/contents/${path}`)
          .then(response => response.json())
          .then(content => {
            console.log(content);
            this.content = content.sections[0].content;
            return true;
          });    
      });
  }
}
