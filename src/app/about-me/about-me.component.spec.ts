import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {

  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the about-me component', () => {
    expect(component).toBeDefined();
  });

  it('should have the profile picture component', () => {
    const element = fixture.nativeElement;
    const profilePictureElement = element.querySelector('profile-picture');
    expect(profilePictureElement).toBeTruthy();
  });
});