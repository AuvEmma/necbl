/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllplayersComponent } from './allplayers.component';

describe('AllplayersComponent', () => {
  let component: AllplayersComponent;
  let fixture: ComponentFixture<AllplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
