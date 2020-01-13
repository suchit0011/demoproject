import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedummyComponent } from './homedummy.component';

describe('HomedummyComponent', () => {
  let component: HomedummyComponent;
  let fixture: ComponentFixture<HomedummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
