import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeNavComponent } from './icone-nav.component';

describe('IconeNavComponent', () => {
  let component: IconeNavComponent;
  let fixture: ComponentFixture<IconeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
