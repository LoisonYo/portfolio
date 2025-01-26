import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {

  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the nav bar component', () => {
    expect(component).toBeDefined();
  });

  it('should have a nav bar', () => {
    const navBarElement = fixture.nativeElement;
    const navElement = navBarElement.querySelector('nav');
    expect(navElement).toBeTruthy();
  });
});