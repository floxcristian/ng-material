// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  routes;
  content;
  toolbar;
  footer;
  whats_new_page;
  whats_new_items;
  error_page;
  skip_link_label;
  read_more_button_label;
  toggle_button_aria_label_collapsed;
  toggle_button_aria_label_expanded;
  spec_recommend_do;
  spec_recommend_dont;
  spec_recommend_caution;
  beta_message;
  beta_message_cta;
  play_label;
  pause_label;
  mute_label;
  unmute_label;
  left_nav_drawers;

  constructor(
    private httpClient: HttpClient
  ) {
    this.routes = window.site_meta.routes || {};
    this.content = window.site_meta.homepage || {};
    this.toolbar = window.site_meta.toolbar || {};
    this.footer = window.site_meta.footer || {};
    this.whats_new_page = window.site_meta.whats_new_page || {};
    this.whats_new_items = window.site_meta.whats_new_items || [];
    this.error_page = window.site_meta.error_page || {};
    this.skip_link_label = window.site_meta.skip_link_label || "";
    this.read_more_button_label = window.site_meta.read_more_button_label || "";
    this.toggle_button_aria_label_collapsed = window.site_meta.toggle_button_aria_label_collapsed || "";
    this.toggle_button_aria_label_expanded = window.site_meta.toggle_button_aria_label_expanded || "";
    this.spec_recommend_do = window.site_meta.spec_recommend_do || "";
    this.spec_recommend_dont = window.site_meta.spec_recommend_dont || "";
    this.spec_recommend_caution = window.site_meta.spec_recommend_caution || "";
    this.beta_message = window.site_meta.beta_message || "";
    this.beta_message_cta = window.site_meta.beta_message_cta || "";
    this.play_label = window.site_meta.play_label || "";
    this.pause_label = window.site_meta.pause_label || "";
    this.mute_label = window.site_meta.mute_label || "";
    this.unmute_label = window.site_meta.unmute_label || "";
    this.left_nav_drawers = window.site_meta.left_nav_drawers || [];
  }

  getRequest(url) {
    return this.httpClient.get(url);
  }

  // o: xxx, r: xxx
  getDocumentFromRoute(e) {
    /*return e.url.pipe(Object(o.a)(e => {
      let n = "/" + e.map(e => e.path).join("/");
      r = this.routes[n];
      return this.getRequest("/page-data/" + r.reference.collection_id + "/" + r.reference.document_id + ".json");
    }))*/
  }
  
}
