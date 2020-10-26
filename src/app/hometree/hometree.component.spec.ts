import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometreeComponent } from './hometree.component';

describe('HometreeComponent', () => {
  let component: HometreeComponent;
  let fixture: ComponentFixture<HometreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HometreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HometreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
