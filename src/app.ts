import {Router} from 'aurelia-router';
import routes from './routes';
import $ from 'jquery';

export class App {
  title: string;
  router: Router;

  constructor() {
    this.title = 'Aurelia community';
  }

  configureRouter(config, router) {
    config.title = this.title;
    config.addPipelineStep('modelbind', RouterStep);
    config.addPipelineStep('postcomplete', PostCompleteStep);
    config.map(routes);
    this.router = router;
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