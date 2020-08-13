import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCellComponent } from './comment-cell.component';

describe('CommentCellComponent', () => {
  let component: CommentCellComponent;
  let fixture: ComponentFixture<CommentCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
