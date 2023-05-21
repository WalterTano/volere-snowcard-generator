import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowcardFieldCreationModalComponent } from './snowcard-field-creation-modal.component';

describe('SnowcardFieldCreationModalComponent', () => {
  let component: SnowcardFieldCreationModalComponent;
  let fixture: ComponentFixture<SnowcardFieldCreationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowcardFieldCreationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowcardFieldCreationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
