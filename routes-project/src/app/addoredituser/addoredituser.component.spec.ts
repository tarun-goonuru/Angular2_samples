import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoredituserComponent } from './addoredituser.component';

describe('AddoredituserComponent', () => {
  let component: AddoredituserComponent;
  let fixture: ComponentFixture<AddoredituserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoredituserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoredituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
