import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeButtonComponent } from './resume-button.component';

describe('AboutMeComponent', () => {

  let component: ResumeButtonComponent;
  let fixture: ComponentFixture<ResumeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the resume button component', () => {
    expect(component).toBeDefined();
  });
});