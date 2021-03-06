import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongelistadminComponent } from './congelistadmin.component';

describe('CongelistadminComponent', () => {
  let component: CongelistadminComponent;
  let fixture: ComponentFixture<CongelistadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongelistadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongelistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
