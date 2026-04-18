import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolving } from './problem-solving';

describe('ProblemSolving', () => {
  let component: ProblemSolving;
  let fixture: ComponentFixture<ProblemSolving>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemSolving]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSolving);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
