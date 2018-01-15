import { Router } from "aurelia-router";
import { inject } from "aurelia-framework";
import * as data from "text!assets/site-map.json";

@inject(Router)
export class Guides {
  router: Router;
  books: any;
  sitemap: any;
  constructor(router: Router) {
    this.router = router;
    this.sitemap = JSON.parse(data as any);
  }

  // configureRouter1(config, router) {

  configureRouter(config, router) {
    let routes: any[] = [];
    this.router = router;
    console.log(this.sitemap);

    for (let route of this.sitemap.topics) {
      console.log(route);

      route.path = route.path || "";

      routes.push({
        route: "guides/content/:author/:book/:path",
        name: `${route.author}-${route.book}-${route.path}`,
        moduleId: "guides/guide-content",
        nav: true,
        href: `#guides/guide-content/${route.author}/${route.book}/${
          route.path
        }`,
        title: route.title,
        settings: { children: [], path: "" }
      });
    }
    console.log(routes);

    config.map(routes);
  }
}
