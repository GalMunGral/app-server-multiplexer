import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {
  @Input() typing = false;
  @Output() finished = new EventEmitter();
  commentForm;
  
  constructor(
    private commentService: CommentService,
    private formBuilder: FormBuilder
  ) {
    this.commentForm = this.formBuilder.group({
      author: 'TestUser',
      content: '',
      time: new Date()
    })
  }

  ngOnInit() {
  }

  startTyping() {
    this.typing = true;
  }

  cancel() {
    this.typing = false;
    this.commentForm.reset();
    this.finished.emit();
  }

  submit() {
    console.log(this.commentForm.value);
    // TODO: submit data to backend
    this.commentForm.reset();
    this.typing = false;
    console.log(this.commentForm.value)
    this.finished.emit();
  }
}
