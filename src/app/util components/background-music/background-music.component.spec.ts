import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundMusicComponent } from './background-music.component';

describe('BackgroundMusicComponent', () => {
  let component: BackgroundMusicComponent;
  let fixture: ComponentFixture<BackgroundMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
