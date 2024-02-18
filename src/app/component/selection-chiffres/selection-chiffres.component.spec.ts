import {
  ComponentFixture,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { SelectionChiffresComponent } from './selection-chiffres.component';
import { JeuxService } from '../../service/jeux.service';
import { NiveauDifficulteEnum } from '../../models/niveau-difficulte.enum';

describe('SelectionChiffresComponent', () => {
  let component: SelectionChiffresComponent;
  let fixture: ComponentFixture<SelectionChiffresComponent>;
  let jeuxService: JeuxService;
  let fixture2: ComponentFixture<JeuxService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionChiffresComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionChiffresComponent);
    component = fixture.componentInstance;
    jeuxService = TestBed.inject(JeuxService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new grid', waitForAsync(() => {
    // ARRANGE

    // ACT
    jeuxService.nouvelleGrille(NiveauDifficulteEnum.FACILE);

    // ASSERT
    expect(component).toBeTruthy();
    expect(component.nbRestant).toBeTruthy();
    expect(component.nbRestant.find(value => value > 0))
      .withContext('there is one greater than 0')
      .toBeTruthy();
  }));

  it('should select number', waitForAsync(() => {
    // ARRANGE
    jeuxService.nouvelleGrille(NiveauDifficulteEnum.FACILE);
    component.remplissageAutoChiffre = true;

    // ACT
    component.selectionChiffre(5);

    // ASSERT
    expect(component).toBeTruthy();
    expect(component.chiffreSelectionnee).toEqual(5);
    expect(component.estSelectionne(5)).toBeTrue();
    expect(component.nbRestant.find(value => value > 0))
      .withContext('there is one greater than 0')
      .toBeTruthy();
  }));
});
