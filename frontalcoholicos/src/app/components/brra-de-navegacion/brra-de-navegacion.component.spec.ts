import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrraDeNavegacionComponent } from './brra-de-navegacion.component';

describe('BrraDeNavegacionComponent', () => {
  let component: BrraDeNavegacionComponent;
  let fixture: ComponentFixture<BrraDeNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrraDeNavegacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrraDeNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
