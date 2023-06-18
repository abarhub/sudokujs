import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {FormsModule} from '@angular/forms';
import {ToggleComponent} from '../toggle/toggle.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        MenuComponent,
        ToggleComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
