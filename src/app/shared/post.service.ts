import { Injectable } from '@angular/core';
import { Post } from './post';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { stringify } from 'querystring';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  postsRef: AngularFireList<any>;
  postRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  /* Create post */
  AddPost(post: Post) {
    this.postsRef.push({
      post_title: post.title,
      question: post.question,
      question_author: post.question_author,
      answer: post.answer,
      signature: post.signature,
      publication_date: post.publication_date,
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Get post */
  GetPost(id: string) {
    this.postRef = this.db.object('posts-list/' + id);
    return this.postRef;
  }  

  /* Get post list */
  GetPostList() {
    this.postsRef = this.db.list('posts-list');
    return this.postsRef;
  }

  /* Update post */
  UpdatePost(id, post: Post) {
    this.postRef.update({
      post_title: post.title,
      question: post.question,
      question_author: post.question_author,
      answer: post.answer,
      signature: post.signature,
      publication_date: post.publication_date,
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Delete post */
  DeletePost(id: string) {
    this.postRef = this.db.object('posts-list/' + id);
    this.postRef.remove()
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}