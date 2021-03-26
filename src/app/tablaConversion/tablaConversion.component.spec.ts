import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConversionComponent } from './tablaConversion.component';

describe('TablaConversionComponent', () => {
  let component: TablaConversionComponent;
  let fixture: ComponentFixture<TablaConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
