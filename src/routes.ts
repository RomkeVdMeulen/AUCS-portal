import {homeIcon, guidesIcon, blogIcon, helpIcon} from './routes-icons';

const routes = [
  {
    route: ["", "home"],
    name: "home",
    moduleId: "home",
    nav: true,
    title: "Home",
    settings: { icon: homeIcon }
  },
  {
    route: "guides",
    name: "guides",
    moduleId: "guides/guides",
    nav: false,
    title: "Guides",
    settings: { icon: guidesIcon }
  },
  {
    route: "guides/content",
    name: "guides",
    moduleId: "guides/guides",
    nav: true,
    title: "Guides",
    settings: { icon: guidesIcon },
    href: "#guides/content"
  },
  {
    route: "guides/content/:author/:book",
    name: "guides",
    moduleId: "guides/guides",
    nav: true,
    title: "Guides",
    settings: { icon: guidesIcon },
    href: "#/guides/content/:author/:book"
  },
  {
    route: "blog",
    name: "blog",
    moduleId: "blog/blog",
    nav: true,
    title: "Blog",
    settings: { icon: blogIcon }
  },
  {
    route: "help",
    name: "help",
    moduleId: "help/help",
    nav: true,
    title: "Help",
    settings: { icon: helpIcon }
  }
];

export default routes;
