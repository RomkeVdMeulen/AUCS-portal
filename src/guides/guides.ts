// import { Router } from "aurelia-router";
import { bindable } from "aurelia-framework";
import * as data from "text!assets/site-map.json";

// @inject(Router)
export class Guides {
  @bindable() urlBook: string;
  // router: Router;
  // title: string;
  // guides: any;
  // overview: string;
  dataSource: any;

  constructor() {
    // this.router = router;
    this.dataSource = JSON.parse(data as any);
    // this.title = sitemap.title;
    // this.guides = sitemap.guides;
    // this.groups =
    // this.overview = sitemap.overview;
  }

  IframeUrl(param) {
    return `/#/guides/content/${param.author}/${param.book}`;
  }

  activate(params) {
    if (params.author) {
      this.urlBook = `https://${params.author}.gitbooks.io/${params.book}/content/`;
    } else {
      this.urlBook = "";
    }
  }
}
