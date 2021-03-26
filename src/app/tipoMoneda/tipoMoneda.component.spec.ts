import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMonedaComponent } from './tipoMoneda.component';

describe('TipoMonedaComponent', () => {
  let component: TipoMonedaComponent;
  let fixture: ComponentFixture<TipoMonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
