import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './types';
import { Observable } from 'rxjs';

const commentsUrl = '//portfolio-galmungral.herokuapp.com/notube/api/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  // comments: Comment[];

  constructor(private http: HttpClient) { }
  
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(commentsUrl);
  }

}
