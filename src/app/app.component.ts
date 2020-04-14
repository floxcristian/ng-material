// Core
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
// Services
import { ContentService } from './services/content/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-material';
  footer;
  skipLinkLabel;
  readMoreButtonLabel;
  toggleButtonAriaLabelCollapsed;
  toggleButtonAriaLabelExpanded;
  betaMessage;
  betaMessageCTA;
  navigationDrawer;

  constructor(
    private contentService: ContentService,
    private router: Router,
    //private activeRoute = ActivatedRoute,
    //metaService = r,
    //envService = i
  ){
    // this.footer = this.contentService.footer;
    // this.skipLinkLabel = this.contentService.skip_link_label;
    // this.readMoreButtonLabel = this.contentService.read_more_button_label;
    // this.toggleButtonAriaLabelCollapsed = this.contentService.toggle_button_aria_label_collapsed;
    // this.toggleButtonAriaLabelExpanded = this.contentService.toggle_button_aria_label_expanded;
    // this.betaMessage = this.contentService.beta_message;
    // this.betaMessageCTA = this.contentService.beta_message_cta;

    this.router.resetConfig(this.router.config);
    //this.metaService.removeTag('name="robots"');
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      event instanceof NavigationEnd && (this.hasFragmentIdentifier() || window.scrollTo(0, 0));
    });
  }

  hasFragmentIdentifier() {
    return this.router.url.indexOf("#") > 0;
  }

  // == rout e: user, t: currentRoute
  getRedirectRoute(route: string, t: string) {
    return {
      path: route.substring(1),
      redirectTo: t.substring(1),
      pathMatch: "full"
    }
  }

  // EagerComponents
  getEagerComponent(component) {
    /*return "Homepage" === component.reference.collection_id ? {
      path: component.route.substring(1),
      component: HomePageComponent,
      pathMatch: "full"
    } : "WhatsNewPage" === component.reference.collection_id ? {
      path: component.route.substring(1),
      component: WhatsNewPageComponent,
      pathMatch: "full"
    } : void 0*/
  }

  // LazyComponents
  getLazyComponent(component) {
/*
    let module;

    switch (component.reference.collection_id) {
      case "LandingPages":
        module = () => {
          return n.e(8).then(n.bind(null, "fAMW"))
            .then(e => e.LandingPageModule)
        };
        break;
      case "ArticlePages":
      case "Articles":
      case "Guidelines":
      case "Resources":
        module = () => {
          return Promise.all([n.e(1), n.e(7)])
            .then(n.bind(null, "vaQb"))
            .then(e => e.ArticlePageModule)
        };
        break;
      case "Components":
        module = () => {
          return Promise.all([n.e(1), n.e(6)])
            .then(n.bind(null, "5a1V"))
            .then(e => e.ComponentsPageModule)
        }
    }
    return {
      path: component.route.substring(1),
      loadChildren: module,
      pathMatch: "full"
    }*/
  }

/*
  function e(e, t, n, r, i) {


  this.navigationDrawer = (e, t) => {
    if (!qg) {
      qg = {};
      for (var n = 0, r = e; n < r.length; n++) {
        var i = r[n].document_content;
        qg[i.route_displayed_on] = i
      }
    }
    return qg.design || zg.c
  }(this.contentService.left_nav_drawers, this.activeRoute.parent || this.activeRoute);

  Object.keys(this.contentService.routes)
    .forEach((e => {
      var t = o.contentService.routes[e];
      i.isProduction() && !t.public || (Hg.indexOf(t.reference.collection_id) > -1 ? o.router.config.unshift(o.getLazyComponent(t)) : o.router.config.unshift(o.getEagerComponent(t));
      t.other_routes.forEach((t => {
        o.router.config.unshift(o.getRedirectRoute(t, e))
      })))
  }))
  
}*/
}
