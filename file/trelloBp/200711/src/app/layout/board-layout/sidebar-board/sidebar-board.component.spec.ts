import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBoardComponent } from './sidebar-board.component';

describe('SidebarBoardComponent', () => {
  let component: SidebarBoardComponent;
  let fixture: ComponentFixture<SidebarBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
