import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hometreeComponent } from './hometree.component';

describe('hometreeComponent', () => {
  let component: hometreeComponent;
  let fixture: ComponentFixture<hometreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ hometreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(hometreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
