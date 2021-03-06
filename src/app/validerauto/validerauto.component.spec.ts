import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderautoComponent } from './validerauto.component';

describe('ValiderautoComponent', () => {
  let component: ValiderautoComponent;
  let fixture: ComponentFixture<ValiderautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
