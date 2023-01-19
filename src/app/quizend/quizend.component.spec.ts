import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizendComponent } from './quizend.component';

describe('QuizendComponent', () => {
  let component: QuizendComponent;
  let fixture: ComponentFixture<QuizendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
