import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaavComponent } from './naav.component';

describe('NaavComponent', () => {
  let component: NaavComponent;
  let fixture: ComponentFixture<NaavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
