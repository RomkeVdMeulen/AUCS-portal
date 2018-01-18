import { bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import routes from "./routes";
import $ from "jquery";

export class App {
  @bindable activeRoute: string = "";
  title: string;
  router: Router;

  constructor() {
    this.title = "Aurelia community";
  }

  configureRouter(config, router) {
    config.title = this.title;
    config.addPipelineStep("modelbind", RouterStep);
    config.addPipelineStep("postcomplete", PostCompleteStep);
    config.map(routes);
    this.router = router;

    const theScript = document.createElement('script');
    theScript.src = "https://embed-cdn.surveyhero.com/popup/user/main.a8027c1f.js"
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(theScript);
  }
}

class RouterStep {
  run(routingContext, next) {
    return next();
  }
}

class PostCompleteStep {
  run(routingContext, next) {
    //$(".main-layout").scrollTop(0);
    return next();
  }
}
