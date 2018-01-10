import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class SideBar {
    @bindable router;

    bind() {
      console.log(this.router);
    }
}
