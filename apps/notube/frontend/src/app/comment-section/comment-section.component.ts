import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../types';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  comments: Comment[];

  constructor(
    private commentService: CommentService,
  ) {
    this.commentService.getComments().subscribe(rawData => {
      this.comments = this.format(rawData);
    });
   }

  ngOnInit() {
  }

  private format(rawData) {
    return rawData.map(comment => {
      if (comment['_id']) {
        comment['_id'] = comment['_id']['$oid'];
      }
      comment.timestamp = new Date(comment.timestamp['$date']);
      if (comment.replies) {
        comment.replies = this.format(comment.replies);
      }
      return comment;
    });
  }
}
