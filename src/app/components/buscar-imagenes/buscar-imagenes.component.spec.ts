import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarImagenesComponent } from './buscar-imagenes.component';

describe('BuscarImagenesComponent', () => {
  let component: BuscarImagenesComponent;
  let fixture: ComponentFixture<BuscarImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
