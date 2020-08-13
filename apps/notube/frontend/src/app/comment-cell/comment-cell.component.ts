import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../types';

@Component({
  selector: 'app-comment-cell',
  templateUrl: './comment-cell.component.html',
  styleUrls: ['./comment-cell.component.scss']
})
export class CommentCellComponent implements OnInit {
  @Input() comment: Comment;
  expanded: boolean = false;
  editing: boolean = false;
   
  constructor() { }

  ngOnInit() {
  }

}
