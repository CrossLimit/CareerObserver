import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveTestComponent } from './retrieve-test.component';

describe('RetrieveTestComponent', () => {
  let component: RetrieveTestComponent;
  let fixture: ComponentFixture<RetrieveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
