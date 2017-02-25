/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllgamesComponent } from './allgames.component';

describe('AllgamesComponent', () => {
  let component: AllgamesComponent;
  let fixture: ComponentFixture<AllgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
