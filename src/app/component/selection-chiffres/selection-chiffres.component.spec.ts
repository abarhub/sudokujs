import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectionChiffresComponent } from './selection-chiffres.component';

describe('SelectionChiffresComponent', () => {
  let component: SelectionChiffresComponent;
  let fixture: ComponentFixture<SelectionChiffresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionChiffresComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionChiffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
