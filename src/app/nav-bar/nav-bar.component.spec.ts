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

  it('should have the nav bar', () => {
    const element = fixture.nativeElement;
    const navElement = element.querySelector('nav');
    expect(navElement).toBeTruthy();
  });

  it('should have a link to the about me section', () => {
    const element = fixture.nativeElement;
    const linkElement = element.querySelector('a');
    expect(linkElement.href).toMatch(new RegExp(`\#about\-me$`));
  });
});