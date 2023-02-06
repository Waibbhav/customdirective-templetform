import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perent3Component } from './perent3.component';

describe('Perent3Component', () => {
  let component: Perent3Component;
  let fixture: ComponentFixture<Perent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Perent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
