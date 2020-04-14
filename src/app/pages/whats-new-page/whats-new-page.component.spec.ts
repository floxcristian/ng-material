import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsNewPageComponent } from './whats-new-page.component';

describe('WhatsNewPageComponent', () => {
  let component: WhatsNewPageComponent;
  let fixture: ComponentFixture<WhatsNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
