import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherautoComponent } from './afficherauto.component';

describe('AfficherautoComponent', () => {
  let component: AfficherautoComponent;
  let fixture: ComponentFixture<AfficherautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
