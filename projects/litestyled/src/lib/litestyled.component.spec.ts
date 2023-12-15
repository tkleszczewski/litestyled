import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitestyledComponent } from './litestyled.component';

describe('LitestyledComponent', () => {
  let component: LitestyledComponent;
  let fixture: ComponentFixture<LitestyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LitestyledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LitestyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
