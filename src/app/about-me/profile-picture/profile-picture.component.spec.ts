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
});