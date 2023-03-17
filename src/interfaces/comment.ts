export interface ICommentRequest {
  comment: string;
  userId: string;
  announcementId: string;
}

export interface IUpdateCommentRequest {
  comment: string;
  commentId: string;
}
