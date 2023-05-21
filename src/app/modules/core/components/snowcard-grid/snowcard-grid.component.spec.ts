import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowcardGridComponent } from './snowcard-grid.component';

describe('SnowcardGridComponent', () => {
  let component: SnowcardGridComponent;
  let fixture: ComponentFixture<SnowcardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowcardGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowcardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
