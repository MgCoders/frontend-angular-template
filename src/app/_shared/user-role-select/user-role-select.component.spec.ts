import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleSelectComponent } from './user-role-select.component';

describe('UserRoleSelectComponent', () => {
  let component: UserRoleSelectComponent;
  let fixture: ComponentFixture<UserRoleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
