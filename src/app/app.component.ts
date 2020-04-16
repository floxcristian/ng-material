// Core
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
// Services
import { ContentService } from './services/content/content.service';
// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WhatsNewPageComponent } from './pages/whats-new-page/whats-new-page.component';
import { MetaService } from './services/meta/meta.service';
import { EnvService } from './services/env/env.service';

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
    private activeRoute: ActivatedRoute,
    metaService: MetaService,
    envService: EnvService
  ) {
    this.footer = this.contentService.footer;
    this.skipLinkLabel = this.contentService.skip_link_label;
    this.readMoreButtonLabel = this.contentService.read_more_button_label;
    this.toggleButtonAriaLabelCollapsed = this.contentService.toggle_button_aria_label_collapsed;
    this.toggleButtonAriaLabelExpanded = this.contentService.toggle_button_aria_label_expanded;
    this.betaMessage = this.contentService.beta_message;
    this.betaMessageCTA = this.contentService.beta_message_cta;

    // qg:xxx, r:xxx, zg:xxx
    /*
    this.navigationDrawer = (e, t) => {
      if (!qg) {
          qg = {};
          for (let n = 0, r = e; n < r.length; n++) {
              let i = r[n].document_content;
              qg[i.route_displayed_on] = i
          }
      }
      return qg.design || zg.c
  }(this.contentService.left_nav_drawers, this.activeRoute.parent || this.activeRoute)*/

    Object.keys(this.contentService.routes)
      .forEach(route => {
        let route_info = this.contentService.routes[route];

        let x;
        /*
        this.envService.isProduction() && !route_info.public || (Hg.indexOf(route_info.reference.collection_id) > -1 ? 
        this.router.config.unshift(this.getLazyComponent(route_info)) : 
        this.router.config.unshift(this.getEagerComponent(route_info));*/

        if(true){
          this.router.config.unshift(this.getLazyComponent(route_info));
        }
        else{
          this.router.config.unshift(this.getEagerComponent(route_info));
        }
        
        route_info.other_routes.forEach(other_route => {
          this.router.config.unshift(this.getRedirectRoute(other_route, route));
        })
      })

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

  getRedirectRoute(other_route: string, route: string) {
    return {
      path: other_route.substring(1),
      redirectTo: route.substring(1),
      pathMatch: "full"
    }
  }

  getEagerComponent(component) {
    return "Homepage" === component.reference.collection_id ? {
      path: component.route.substring(1),
      component: HomePageComponent,
      pathMatch: "full"
    } : "WhatsNewPage" === component.reference.collection_id ? {
      path: component.route.substring(1),
      component: WhatsNewPageComponent,
      pathMatch: "full"
    } : void 0
  }

  getLazyComponent(component) {
    let module;
    /*
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
    }*/
    return {
      path: component.route.substring(1),
      loadChildren: module,
      pathMatch: "full"
    }
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
