import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowcardFieldComponent } from './snowcard-field.component';

describe('SnowcardFieldComponent', () => {
  let component: SnowcardFieldComponent;
  let fixture: ComponentFixture<SnowcardFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowcardFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowcardFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
