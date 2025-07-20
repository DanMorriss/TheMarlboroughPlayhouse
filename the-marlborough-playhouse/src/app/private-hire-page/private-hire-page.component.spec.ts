import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHirePageComponent } from './private-hire-page.component';

describe('PrivateHirePageComponent', () => {
  let component: PrivateHirePageComponent;
  let fixture: ComponentFixture<PrivateHirePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHirePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateHirePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
