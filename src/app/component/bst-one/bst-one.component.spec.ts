import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BstOneComponent } from './bst-one.component';

describe('BstOneComponent', () => {
  let component: BstOneComponent;
  let fixture: ComponentFixture<BstOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BstOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BstOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
