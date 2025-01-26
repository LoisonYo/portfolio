import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePictureComponent } from './profile-picture.component';

describe('ProfilePictureComponent', () => {

  let component: ProfilePictureComponent;
  let fixture: ComponentFixture<ProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePictureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the profile picture component', () => {
    expect(component).toBeDefined();
  });

  it('should have the profile picture', () => {
    const element = fixture.nativeElement;
    const profilePictureElement = element.querySelector('img');
    expect(profilePictureElement).toBeTruthy();
  });

  it('should have the correct profile picture', () => {
    const element = fixture.nativeElement;
    const profilePictureElement = element.querySelector('img');
    expect(profilePictureElement.src).toMatch(new RegExp(`${component.profilePicture}$`));
  });
});