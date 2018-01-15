import { Router } from "aurelia-router";
import { inject, bindable } from "aurelia-framework";
import { HttpClient } from 'aurelia-fetch-client';
import * as data from "text!assets/site-map.json";

@inject(HttpClient, Router)
export class Guides {
  @bindable() urlBook: string;
  router: Router;
  books: any;
  client: HttpClient;
  chapters: any;
  atRoot: boolean;
  title: string;
  items: any;
  content: string;
  parentLink: any;
  showParentLink: boolean;
    
  constructor(client: HttpClient, router: Router) {
    this.client = client;
    this.router = router;
    let sitemap: any = JSON.parse(data as any);
    this.items = sitemap.categories;
    this.content = sitemap.content;
  }

  IframeUrl(param) {
    return `/#/guides/content/${param.author}/${param.book}`;
  }

  activate(params, navigationInstruction) {
    console.log(navigationInstruction);
    if (params.author) {
      this.urlBook = `https://${params.author}.gitbooks.io/${params.book}/content/`;
      // const ri = location.href.indexOf('guides/');
      // const target = ri > -1 ? location.href.substr(ri).replace('guides/', '') : '';

      // return this.client.fetch('https://www.gitbook.com/book/aurelia-tools/aurelia-cli-visions/contents')
      //   .then(response => response.json())
      //   .then(data => {
      //     this.chapters = data.progress.chapters;
      //     this.chapters.forEach(element => {
      //       element.path = element.path.replace('.md', '').replace(/\//g, '_____');
      //       const index = element.level.lastIndexOf('.');
      //       element.parentLevel = index > -1 ? element.level.substr(0, index) : '';
      //     });
      //     this.chapters.forEach(element => {
      //       element.descendants = this.findDescendants(element);
      //     });
      //     console.log(this.chapters);
      //     this.setCurrentTopic(target);
      //     return true;
      //   });
    } else {
      this.urlBook = '';
    }
  }

  findDescendants(parentElement: any): any {
    let descendants = [];
    this.chapters.forEach(element => {
      if (element.parentLevel === parentElement.level)
        descendants.push(element);
    });
    return descendants;
  }

  itemClicked(params: any): void {
    const href = params.target.href as string;
    if (href === location.href)
      return;
    const target = href.substr(href.indexOf('guides/')).replace('guides/', '');
    this.setCurrentTopic(target);
    this.router.navigate(href);
  }

  setCurrentTopic(topic: any) {
    console.log(topic);
    // locate current entry
    const chapter = this.chapters.find(c => c.path === topic);
    const level = chapter ? chapter.level : '';
    console.log(chapter);
    if (chapter) {
      this.items = chapter.descendants;
      this.title = chapter.title;
      const index = chapter.level.lastIndexOf('.');
      const parentLevel = index > -1 ? chapter.level.substr(0, index) : '';
      const parentChapter = this.chapters.find(c => c.level === parentLevel);
      this.parentLink = parentChapter == undefined ? '/#/guides' : `/#/guides/${parentChapter.path}`;
      this.showParentLink = parentChapter == undefined;
    }
    else {
      this.items = this.chapters.filter(element => element.parentLevel.length === 1);
      this.title = 'Guides';
      this.parentLink = undefined;
      this.showParentLink = false;
    }
    const topicToShow = topic === '' ? this.items[0].path : topic;
    const path = `${topicToShow}.json`.replace(/_____/g, '/');
    return this.client.fetch(`https://api.gitbook.com/book/aurelia-tools/aurelia-cli-visions/contents/${path}`)
      .then(response => response.json())
      .then(content => {
        this.content = content.sections[0].content;
        return true;
      });
  }
}
