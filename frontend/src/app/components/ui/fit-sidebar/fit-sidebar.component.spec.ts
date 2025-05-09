import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitSidebarComponent } from './fit-sidebar.component';

describe('FitSidebarComponent', () => {
  let component: FitSidebarComponent;
  let fixture: ComponentFixture<FitSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
