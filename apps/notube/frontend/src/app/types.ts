export interface VideoInfo {
  title: string,
  numOfViews: number
}

export interface Comment {
  author: string,
  timestamp: number,
  content: string,
  likes: number
  replies: CommentArray
}

interface CommentArray extends Array<Comment> { } 