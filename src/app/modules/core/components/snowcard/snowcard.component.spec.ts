import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowcardComponent } from './snowcard.component';

describe('SnowcardComponent', () => {
  let component: SnowcardComponent;
  let fixture: ComponentFixture<SnowcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
