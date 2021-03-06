import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidercongeComponent } from './validerconge.component';

describe('ValidercongeComponent', () => {
  let component: ValidercongeComponent;
  let fixture: ComponentFixture<ValidercongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidercongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidercongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
