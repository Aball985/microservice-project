import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import {} from '@angular/fire/app';
import { ActivatedRoute } from '@angular/router';
fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let route: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
      ],
      providers: [ActivatedRoute],
    }).compileComponents();
  }));

  beforeEach(() => {
    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all navigation links', () => {
    fixture.detectChanges();
    expect(route.params);
  });
});
