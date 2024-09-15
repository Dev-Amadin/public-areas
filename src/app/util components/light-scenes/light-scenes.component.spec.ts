import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightScenesComponent } from './light-scenes.component';

describe('LightScenesComponent', () => {
  let component: LightScenesComponent;
  let fixture: ComponentFixture<LightScenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightScenesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
