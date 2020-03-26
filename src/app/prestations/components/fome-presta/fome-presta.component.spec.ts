import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomePrestaComponent } from './fome-presta.component';

describe('FomePrestaComponent', () => {
  let component: FomePrestaComponent;
  let fixture: ComponentFixture<FomePrestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomePrestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomePrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
