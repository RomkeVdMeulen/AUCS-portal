import {homeIcon, guidesIcon, docsIcon, helpIcon} from './routes-icons';

const routes = [
    { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Home', settings: { icon: homeIcon } },
    { route: 'guides', name: 'guides', moduleId: 'guides/guides', nav: true, title: 'Guides', settings: { icon: guidesIcon } },
    { route: 'docs', name: 'docs', moduleId: 'docs/docs', nav: true, title: 'Docs', settings: { icon: docsIcon } },
    { route: 'help', name: 'help', moduleId: 'help/help', nav: true, title: 'Help', settings: { icon: helpIcon } },
];

export default routes;
