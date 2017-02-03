/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LakePowellComponent } from './lake-powell.component';

describe('LakePowellComponent', () => {
  let component: LakePowellComponent;
  let fixture: ComponentFixture<LakePowellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LakePowellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LakePowellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
