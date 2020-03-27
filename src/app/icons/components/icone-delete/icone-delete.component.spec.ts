import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeDeleteComponent } from './icone-delete.component';

describe('IconeDeleteComponent', () => {
  let component: IconeDeleteComponent;
  let fixture: ComponentFixture<IconeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
