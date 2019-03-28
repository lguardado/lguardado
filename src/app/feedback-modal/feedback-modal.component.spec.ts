import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackModalComponent as FeedbackModalComponent } from './feedback-modal.component';

describe('ModalComponent', () => {
  let component: FeedbackModalComponent;
  let fixture: ComponentFixture<FeedbackModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
