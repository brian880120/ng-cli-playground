import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarterComponent } from './smarter.component';

describe('SmaterComponent', () => {
  let component: SmarterComponent;
  let fixture: ComponentFixture<SmarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
