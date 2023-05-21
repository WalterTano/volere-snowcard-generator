import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowcardSectionComponent } from './snowcard-section.component';

describe('SnowcardSectionComponent', () => {
  let component: SnowcardSectionComponent;
  let fixture: ComponentFixture<SnowcardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowcardSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowcardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
