export {};

declare global {
    interface Window {
        site_meta: site_map;
    }
}

export interface site_map {
    toggle_button_aria_label_collapsed: string;
    routes: any;
    pause_label: string;
    footer: any;
    homepage: any;
    error_page: any;
    whats_new_page: any;
    beta_message: string;
    unmute_label: string;
    toolbar: any;
    left_nav_drawers: any[];
    whats_new_items: any[];
    skip_link_label: string;
    mute_label: string;
    spec_recommend_dont: string;
    read_more_button_label: string;
    toggle_button_aria_label_expanded: string;
    beta_message_cta: string;
    spec_recommend_caution: string;
    play_label: string;
    spec_recommend_do: string;
}