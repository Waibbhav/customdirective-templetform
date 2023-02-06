import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perent2Component } from './perent2.component';

describe('Perent2Component', () => {
  let component: Perent2Component;
  let fixture: ComponentFixture<Perent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Perent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
