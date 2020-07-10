import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardComponent } from './modal-card.component';

describe('ModalCardComponent', () => {
  let component: ModalCardComponent;
  let fixture: ComponentFixture<ModalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
