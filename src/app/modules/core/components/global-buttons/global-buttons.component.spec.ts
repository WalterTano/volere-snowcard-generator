import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalButtonsComponent } from './global-buttons.component';

describe('GlobalButtonsComponent', () => {
  let component: GlobalButtonsComponent;
  let fixture: ComponentFixture<GlobalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
