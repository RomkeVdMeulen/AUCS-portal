import { bindable } from "aurelia-framework";
import * as data from "text!assets/site-map.json";

export class Guides {
  @bindable() urlBook: string;
  dataSource: any;

  constructor() {
    this.dataSource = JSON.parse(data as any);
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
