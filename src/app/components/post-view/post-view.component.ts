import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap  } from "@angular/router";
import { Location } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';
import { Post } from '../../shared/post';
import { PostService } from './../../shared/post.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';

 
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})

export class PostViewComponent implements OnInit {

  $key: string
  private db: AngularFireDatabaseModule;
  PostData: any = [];
  postRef: AngularFireObject<any>;
  postRefs: AngularFireList<any>;
  post: { id: '', 
          title: '', 
          question: '', 
          question_author: '', 
          answer: '', 
          signature: '' };

  constructor(
    private postAPI: PostService, 
    private route: ActivatedRoute) { }

  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.GetPost(params.get('key'));
    });
  }

  GetPost($key: string) {
    let path = `post/'${$key}`;
    const postView = this.postAPI.GetPost('post/' + $key).valueChanges();
    return postView;
  }
 
  
}