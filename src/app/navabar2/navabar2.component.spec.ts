import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navabar2Component } from './navabar2.component';

describe('Navabar2Component', () => {
  let component: Navabar2Component;
  let fixture: ComponentFixture<Navabar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navabar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navabar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
