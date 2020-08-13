import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListCellComponent } from './video-list-cell.component';

describe('VideoListCellComponent', () => {
  let component: VideoListCellComponent;
  let fixture: ComponentFixture<VideoListCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
