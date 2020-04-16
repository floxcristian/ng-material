

// Core
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  /*
  Kg([Object(i.D)(), Gg("design:type", Object)], e.prototype, "toolbarConfig", void 0),
  Kg([Object(i.jb)("searchinput", { static: !1 }), Gg("design:type", i.t)], e.prototype, "searchInputRef", void 0),
  Kg([Object(i.jb)("header", { static: !1 }), Gg("design:type", i.t)], e.prototype, "headerElRef", void 0),
  Kg([Object(i.y)("window:scroll"), Gg("design:type", Function), Gg("design:paramtypes", []), Gg("design:returntype", void 0)], e.prototype, "detectScroll", null),
  Kg([Object(i.y)("submit", ["$event"]), Gg("design:type", Function), Gg("design:paramtypes", [Event]), Gg("design:returntype", void 0)], e.prototype, "onSearchSubmit", null),
  Kg([Object(i.y)("document:keydown.escape"), Gg("design:type", Function), Gg("design:paramtypes", []), Gg("design:returntype", void 0)], e.prototype, "onEscKeydownHandler", null),
  */
  toolbarConfig: any;
  searchInputRef: any; // custom
  headerElRef: any; // custom
  //detectScroll: any;
  //onSearchSubmit: any;
  //onEscKeydownHandler: any;
  lastScroll;
  isShown;
  isSearchOpen;
  AnalyticsKeys;

  //@HostListener('click', ['$event'])

  constructor(
    private contentService: ContentService,
    private renderer: Renderer2,
    private router: Router,
    private elRef: ElementRef
  ) {
    this.lastScroll = 0;
    this.isShown = !0;
    this.isSearchOpen = !1;
    //this.AnalyticsKeys = jg.a.AnalyticsKeys;
    this.toolbarConfig || (this.toolbarConfig = this.contentService.toolbar);
  }

  ngAfterViewInit() {
    //window.componentHandler.upgradeElements([this.searchInputRef.nativeElement]);
  }

  ngOnDestroy() {
    //window.componentHandler.downgradeElements([this.searchInputRef.nativeElement]);
  }

  detectScroll() {
    let scrollTop  = window.pageYOffset;
    let t = scrollTop  - this.lastScroll > 5;
    let n = this.lastScroll - scrollTop  > 5;
    t && scrollTop  > 100 ? (this.isShown = !1, this.lastScroll = scrollTop) : n && (this.isShown = !0, this.lastScroll = scrollTop)
    if(t && scrollTop > 100){
      this.isShown = !1;
      this.lastScroll = scrollTop;
    }
  }

  onSearchSubmit(e) {
    e.preventDefault();
    window.location.href = "/search.html?q=" + encodeURIComponent(this.searchInputRef.nativeElement.value);
  }

  onEscKeydownHandler() {
    this.isSearchOpen && this.toggleSearch()
  }

  toggleSearch() {
    
    this.isSearchOpen = !this.isSearchOpen;
    /* 
    this.isSearchOpen ? (this.headerElRef.nativeElement.classList.add("search-show"); 
    this.searchInputRef.nativeElement.focus(); 
    this.listenerDisposalRef = this.renderer.listen("document", "click", (event => {
      this.elRef.nativeElement.contains(event.target) || (this.isSearchOpen = !1, 
        this.headerElRef.nativeElement.classList.remove("search-show"), 
        this.listenerDisposalRef())
    }))) : this.listenerDisposalRef()*/
  }

  isLinkActive(e) {
    return { "nav-item--active": this.router.url.startsWith(e.href) }
  }

}
