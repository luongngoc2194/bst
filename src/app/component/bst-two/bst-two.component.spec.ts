import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BstTwoComponent } from './bst-two.component';

describe('BstTwoComponent', () => {
  let component: BstTwoComponent;
  let fixture: ComponentFixture<BstTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BstTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BstTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
